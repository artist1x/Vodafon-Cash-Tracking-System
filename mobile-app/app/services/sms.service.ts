import { Application, AndroidApplication } from "@nativescript/core";
import { TransactionService } from "./transaction.service";
import { requestSMSPermissions } from "../utils/permissions";
import * as androidApp from "@nativescript/core/application";
import { API_URL, ENDPOINTS } from "~/config/constants";

declare const android: any;
declare const java: any;

export class SMSService {
  private static instance: SMSService;
  private transactionService = TransactionService.getInstance();
  private isMonitoringStarted = false;

  private constructor() {
    console.log("SMSService: Constructor called");
    this.initializeSMSListener();
  }

  static getInstance(): SMSService {
    if (!SMSService.instance) {
      console.log("SMSService: Creating new instance");
      SMSService.instance = new SMSService();
    }
    return SMSService.instance;
  }

  private async initializeSMSListener(): Promise<void> {
    console.log("SMSService: Initializing SMS listener");
    if (global.isAndroid) {
      try {
        const hasPermissions = await requestSMSPermissions();
        console.log("SMSService: Permissions status:", hasPermissions);
        if (hasPermissions && !this.isMonitoringStarted) {
          this.startSMSMonitoring();
          this.isMonitoringStarted = true;
        }
      } catch (error) {
        console.error("SMSService: Permission error:", error);
      }
    }
  }

  private startSMSMonitoring(): void {
    if (!global.isAndroid) {
      console.log("SMSService: Not an Android device");
      return;
    }

    try {
      console.log("SMSService: Starting monitoring");
      const context = androidApp.android.context;
      console.log("SMSService: Got Android context");

      const intentFilter = new android.content.IntentFilter();
      console.log("SMSService: Created intent filter");

      intentFilter.addAction("android.provider.Telephony.SMS_RECEIVED");
      console.log("SMSService: Added action to intent filter");

      intentFilter.setPriority(999);
      console.log("SMSService: Set priority");

      // Create BroadcastReceiver correctly
      const BroadcastReceiver = android.content.BroadcastReceiver.extend({
        onReceive: function (context: any, intent: any) {
          console.log("SMSService: Broadcast received");
          try {
            const bundle = intent.getExtras();
            if (!bundle) {
              console.log("SMSService: No bundle found");
              return;
            }

            const pdusObj = bundle.get("pdus");
            console.log("SMSService: PDUs object type:", typeof pdusObj);

            if (!pdusObj) {
              console.log("SMSService: No PDUs object found");
              return;
            }

            const format = bundle.getString("format") || "";
            let fullMessage = "";
            let sender = "";

            // Get array length using Java reflection
            const pduLength = java.lang.reflect.Array.getLength(pdusObj);
            console.log("SMSService: Number of PDUs:", pduLength);

            // Combine all parts of the message
            for (let i = 0; i < pduLength; i++) {
              const pdu = java.lang.reflect.Array.get(pdusObj, i);
              const message = android.telephony.SmsMessage.createFromPdu(
                pdu,
                format
              );

              if (i === 0) {
                // Get sender from first part only
                sender = message.getOriginatingAddress();
              }

              fullMessage += message.getMessageBody();
            }

            console.log("SMSService: Full message from:", sender);
            console.log("SMSService: Complete message:", fullMessage);

            if (
              sender &&
              (sender.includes("VF-Cash") ||
                sender.toUpperCase().includes("VFCASH"))
            ) {
              console.log("SMSService: Valid VFCash message detected");
              SMSService.instance.processSMS(fullMessage);
            } else {
              console.log("SMSService: Ignored - not from VFCash");
            }
          } catch (error) {
            console.error("SMSService: Error processing broadcast:", error);
            console.error(
              "SMSService: Error details:",
              error.message,
              error.stack
            );
          }
        },
      });

      // Create instance of the receiver
      const receiver = new BroadcastReceiver();
      console.log("SMSService: Created broadcast receiver");

      // Register the receiver
      context.registerReceiver(receiver, intentFilter);
      console.log("SMSService: Registered receiver successfully");
    } catch (error) {
      console.error("SMSService: Setup error:", error);
      if (error instanceof Error) {
        console.error("SMSService: Error details:", error.message, error.stack);
      }
    }
  }

  private processSMS(messageBody: string): void {
    console.log("SMSService: Processing message:", messageBody);
    const transactionData = this.parseVodafoneCashSMS(messageBody);

    if (transactionData) {
      console.log("SMSService: Parsed transaction:", transactionData);
      // Add metadata before sending to API
      const enrichedData = {
        ...transactionData,
        metadata: {
          platform: "VODAFONE_CASH",
          source: "SMS",
        },
      };

      this.sendToAPI(enrichedData);
    } else {
      console.log("SMSService: Could not parse message");
    }
  }

  private parseVodafoneCashSMS(message: string): any {
    console.log("SMSService: Parsing message");

    // Pattern for Arabic message
    const arabicPattern =
      /تم استلام مبلغ (\d+(\.\d+)?) جنيه من رقم (\d+)(?:؛ المسجل بإسم ([^.]+))?/;

    // Pattern for English message
    const englishPattern = /Received EGP(\d+(\.\d+)?) from (\d+) to/;

    const arabicMatch = message.match(arabicPattern);
    const englishMatch = message.match(englishPattern);

    if (arabicMatch) {
      console.log("SMSService: Matched Arabic pattern");
      return {
        amount: parseFloat(arabicMatch[1]),
        sender: arabicMatch[3],
        senderName: arabicMatch[4] || null,
        type: "Transfer",
        timestamp: new Date().toISOString(),
      };
    }

    if (englishMatch) {
      console.log("SMSService: Matched English pattern");
      return {
        amount: parseFloat(englishMatch[1]),
        sender: englishMatch[3],
        type: "Transfer",
        timestamp: new Date().toISOString(),
      };
    }

    console.log("SMSService: No pattern matched");
    return null;
  }

  private async sendToAPI(transactionData: any) {
    try {
      console.log(
        "SMSService: Preparing to send to API:",
        JSON.stringify(transactionData)
      );

      const enrichedData = {
        ...transactionData,
        metadata: {
          platform: "VODAFONE_CASH",
          source: "SMS",
        },
      };

      console.log(
        "SMSService: Sending enriched data to API:",
        JSON.stringify(enrichedData)
      );

      // Explicitly log the request before sending
      console.log(
        "SMSService: API Request URL:",
        `${API_URL}${ENDPOINTS.TRANSACTIONS.MOBILE}`
      );
      console.log("SMSService: API Request Method: POST");

      const response = await this.transactionService.createTransaction(
        enrichedData
      );
      console.log("SMSService: API Response:", JSON.stringify(response));

      return response;
    } catch (error) {
      console.error("SMSService: API Error:", error);
      // إضافة تفاصيل أكثر عن الخطأ
      if (error instanceof Error) {
        console.error("SMSService: Error details:", {
          message: error.message,
          stack: error.stack,
          name: error.name,
        });
      }
      if (error.response) {
        console.error("SMSService: API Error Response:", {
          status: error.response.status,
          data: error.response.data,
        });
      }
      throw error;
    }
  }
}
