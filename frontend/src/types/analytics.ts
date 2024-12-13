export interface AnalyticsData {
  totalTransactions: number;
  totalAmount: number;
  successRate: number;
  averageAmount: number;
  dailyTransactions: number;
  pendingTransactions: number;
}

export interface TransactionTrend {
  date: string;
  amount: number;
  count: number;
}