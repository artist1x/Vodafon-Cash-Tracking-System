import { format } from 'date-fns';
import type { Transaction } from '../../types/transaction';

interface RecentTransactionsProps {
  transactions: Transaction[];
}

export default function RecentTransactions({ transactions }: RecentTransactionsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">Recent Transactions</h3>
        <div className="mt-6 flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <li key={transaction.id} className="py-5">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {transaction.sender} → {transaction.recipient}
                    </p>
                    <p className="text-sm text-gray-500">
                      {format(new Date(transaction.createdAt), 'MMM d, yyyy HH:mm')}
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize" 
                      style={{
                        backgroundColor: {
                          pending: '#fef3c7',
                          completed: '#d1fae5',
                          failed: '#fee2e2'
                        }[transaction.status],
                        color: {
                          pending: '#92400e',
                          completed: '#065f46',
                          failed: '#991b1b'
                        }[transaction.status]
                      }}
                    >
                      {transaction.status}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-sm font-medium text-gray-900">
                      ${transaction.amount.toFixed(2)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}