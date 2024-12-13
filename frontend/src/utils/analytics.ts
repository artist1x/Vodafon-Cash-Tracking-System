import { Transaction } from '../types/transaction';
import { TransactionTrend } from '../types/analytics';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, parseISO } from 'date-fns';

export function calculateAnalytics(transactions: Transaction[]) {
  const total = transactions.length;
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  const completed = transactions.filter(t => t.status === 'completed').length;
  const pending = transactions.filter(t => t.status === 'pending').length;

  return {
    totalTransactions: total,
    totalAmount,
    successRate: total ? Math.round((completed / total) * 100) : 0,
    averageAmount: total ? Math.round(totalAmount / total) : 0,
    dailyTransactions: Math.round(total / 30), // Simplified average
    pendingTransactions: pending,
  };
}

export function calculateTrends(transactions: Transaction[]): TransactionTrend[] {
  const start = startOfMonth(new Date());
  const end = endOfMonth(new Date());
  
  // Create an array of all days in the current month
  const days = eachDayOfInterval({ start, end });
  
  // Initialize the trends array with zero values
  const trends = days.map(day => ({
    date: format(day, 'yyyy-MM-dd'),
    amount: 0,
    count: 0,
  }));

  // Aggregate transaction data by date
  transactions.forEach(transaction => {
    const date = format(parseISO(transaction.createdAt), 'yyyy-MM-dd');
    const trendIndex = trends.findIndex(t => t.date === date);
    
    if (trendIndex !== -1) {
      trends[trendIndex].amount += transaction.amount;
      trends[trendIndex].count += 1;
    }
  });

  return trends;
}