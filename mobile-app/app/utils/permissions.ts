import * as permissions from "nativescript-permissions";

declare const android: any;

export async function requestSMSPermissions(): Promise<boolean> {
  try {
    if (global.isAndroid) {
      const permissionsList = [
        android.Manifest.permission.RECEIVE_SMS,
        android.Manifest.permission.READ_SMS,
      ];

      const granted = await permissions.requestPermissions(
        permissionsList,
        "We need access to your SMS to monitor messages"
      );

      return granted;
    }
    return false;
  } catch (error) {
    console.error("Error requesting SMS permissions:", error);
    return false;
  }
}
