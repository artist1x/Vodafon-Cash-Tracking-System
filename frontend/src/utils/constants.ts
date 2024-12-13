export const DATE_FORMAT = 'yyyy-MM-dd';
export const DATETIME_FORMAT = 'MMM d, yyyy HH:mm';

export const TRANSACTION_STATUS_COLORS = {
  pending: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-800',
  },
  completed: {
    bg: 'bg-green-100',
    text: 'text-green-800',
  },
  failed: {
    bg: 'bg-red-100',
    text: 'text-red-800',
  },
} as const;

export const DEFAULT_ANALYTICS = {
  totalTransactions: 100,
  totalAmount: 1000000,
  successRate: 85,
  averageAmount: 5000,
  dailyTransactions: 10,
  pendingTransactions: 5,
  monthlyGrowth: 2.5,
};