import { Observable } from "@nativescript/core";
import { TransactionService } from "../../services/transaction.service";
import { AuthService } from "../../services/auth.service";
import { NavigationService } from "../../services/navigation.service";
import { DATE_RANGES } from "../../config/constants";
import { formatDate } from "../../utils/date.utils";
import {
  formatCurrency,
  formatTransactionType,
} from "../../utils/format.utils";

export class DashboardViewModel extends Observable {
  private transactionService = TransactionService.getInstance();
  private authService = AuthService.getInstance();
  private navigationService = NavigationService.getInstance();

  selectedDateRangeIndex: number = 0;
  todayTransactions: number = 0;
  weekTransactions: number = 0;
  monthTransactions: number = 0;
  recentTransactions: any[] = [];

  constructor() {
    super();
    this.loadDashboardData();
  }

  async loadDashboardData() {
    try {
      const ranges = [
        DATE_RANGES.TODAY,
        DATE_RANGES.THIS_WEEK,
        DATE_RANGES.THIS_MONTH,
      ];
      const [today, week, month] = await Promise.all(
        ranges.map((range) =>
          this.transactionService.getTransactions({ range })
        )
      );

      this.set("todayTransactions", today.length);
      this.set("weekTransactions", week.length);
      this.set("monthTransactions", month.length);

      const formattedTransactions = today.slice(0, 10).map((transaction) => ({
        ...transaction,
        amount: formatCurrency(transaction.amount),
        type: formatTransactionType(transaction.type),
        timestamp: formatDate(new Date(transaction.timestamp)),
      }));

      this.set(
        "recentTransactions",
        formattedTransactions.length
          ? formattedTransactions
          : [{ type: "No data", amount: "", timestamp: "" }]
      );
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      this.set("recentTransactions", [
        { type: "Error", amount: "N/A", timestamp: "N/A" },
      ]);
    }
  }

  onLogout() {
    this.authService.logout();
    this.navigationService.navigate("login", { clearHistory: true });
  }
  
}
