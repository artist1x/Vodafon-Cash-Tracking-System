import { Transaction } from '../types/transaction';
import { TransactionTrend } from '../types/analytics';
import { startOfMonth, endOfMonth, eachDayOfInterval, format, parseISO, isSameMonth, subMonths } from 'date-fns';
import { DATE_FORMAT, DEFAULT_ANALYTICS } from './constants';

function calculateMonthlyStats(transactions: Transaction[]) {
  if (!transactions.length) {
    return {
      total: DEFAULT_ANALYTICS.totalTransactions,
      amount: DEFAULT_ANALYTICS.totalAmount,
      completed: Math.floor(DEFAULT_ANALYTICS.totalTransactions * (DEFAULT_ANALYTICS.successRate / 100)),
      pending: DEFAULT_ANALYTICS.pendingTransactions,
    };
  }

  return transactions.reduce((acc, transaction) => {
    acc.total += 1;
    acc.amount += transaction.amount;
    if (transaction.status === 'completed') acc.completed += 1;
    if (transaction.status === 'pending') acc.pending += 1;
    return acc;
  }, { total: 0, amount: 0, completed: 0, pending: 0 });
}

export function calculateAnalytics(transactions: Transaction[]) {
  const now = new Date();
  const currentMonthTransactions = transactions.filter(t => 
    isSameMonth(parseISO(t.createdAt), now)
  );
  const previousMonthTransactions = transactions.filter(t => 
    isSameMonth(parseISO(t.createdAt), subMonths(now, 1))
  );

  const currentStats = calculateMonthlyStats(currentMonthTransactions);
  const previousStats = calculateMonthlyStats(previousMonthTransactions);

  const monthlyGrowth = previousStats.amount 
    ? ((currentStats.amount - previousStats.amount) / previousStats.amount) * 100
    : DEFAULT_ANALYTICS.monthlyGrowth;

  return {
    totalTransactions: currentStats.total,
    totalAmount: currentStats.amount,
    successRate: currentStats.total 
      ? Math.round((currentStats.completed / currentStats.total) * 100)
      : DEFAULT_ANALYTICS.successRate,
    averageAmount: currentStats.total 
      ? Math.round(currentStats.amount / currentStats.total)
      : DEFAULT_ANALYTICS.averageAmount,
    dailyTransactions: Math.max(Math.round(currentStats.total / 30), DEFAULT_ANALYTICS.dailyTransactions),
    pendingTransactions: currentStats.pending,
    monthlyGrowth: Math.round(monthlyGrowth * 100) / 100,
  };
}

export function calculateTrends(transactions: Transaction[]): TransactionTrend[] {
  const start = startOfMonth(new Date());
  const end = endOfMonth(new Date());
  const days = eachDayOfInterval({ start, end });
  
  const trends = days.map(day => ({
    date: format(day, DATE_FORMAT),
    amount: 0,
    count: 0,
  }));

  const currentMonthTransactions = transactions.filter(t => 
    isSameMonth(parseISO(t.createdAt), new Date())
  );

  if (currentMonthTransactions.length === 0) {
    // Provide sample data if no transactions exist
    return trends.map(trend => ({
      ...trend,
      amount: Math.floor(Math.random() * 50000) + 10000,
      count: Math.floor(Math.random() * 20) + 5,
    }));
  }

  currentMonthTransactions.forEach(transaction => {
    const date = format(parseISO(transaction.createdAt), DATE_FORMAT);
    const trendIndex = trends.findIndex(t => t.date === date);
    
    if (trendIndex !== -1) {
      trends[trendIndex].amount += transaction.amount;
      trends[trendIndex].count += 1;
    }
  });

  return trends;
}