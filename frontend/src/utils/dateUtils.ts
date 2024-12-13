import { startOfDay, endOfDay, isWithinInterval, parseISO } from 'date-fns';
import type { Transaction } from '../types/transaction';

export function filterTransactionsByDateRange(
  transactions: Transaction[],
  startDate: Date,
  endDate: Date
): Transaction[] {
  const start = startOfDay(startDate);
  const end = endOfDay(endDate);

  return transactions.filter((transaction) => {
    const transactionDate = parseISO(transaction.createdAt);
    return isWithinInterval(transactionDate, { start, end });
  });
}