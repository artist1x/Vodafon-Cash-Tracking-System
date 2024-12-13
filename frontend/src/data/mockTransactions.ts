import { Transaction } from '../types/transaction';
import { subDays, addHours } from 'date-fns';

// Generate realistic mock transactions for development
export const mockTransactions: Transaction[] = Array.from({ length: 100 }, (_, index) => ({
  id: `tr-${index + 1}`,
  amount: Math.floor(Math.random() * 10000) + 100,
  sender: `User${Math.floor(Math.random() * 20) + 1}`,
  // recipient: `Recipient${Math.floor(Math.random() * 20) + 1}`,
  status: ['pending', 'completed', 'failed'][Math.floor(Math.random() * 3)] as Transaction['status'],
  createdAt: addHours(subDays(new Date(), Math.floor(Math.random() * 30)), Math.floor(Math.random() * 24)).toISOString(),
  updatedAt: new Date().toISOString(),
}));