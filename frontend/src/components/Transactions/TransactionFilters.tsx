import { useState } from 'react';
import { Calendar, Search } from 'lucide-react';
import type { TransactionFilters } from '../../types/transaction';

interface TransactionFiltersProps {
  onFilterChange: (filters: TransactionFilters) => void;
}

export default function TransactionFilters({ onFilterChange }: TransactionFiltersProps) {
  const [filters, setFilters] = useState<TransactionFilters>({
    dateFrom: new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0],
    dateTo: new Date().toISOString().split('T')[0],
    sender: '',
    minAmount: undefined,
    maxAmount: undefined,
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">Filter Transactions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Date Range</label>
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="date"
                name="dateFrom"
                value={filters.dateFrom}
                onChange={handleChange}
                className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
            <div className="relative flex-1">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="date"
                name="dateTo"
                value={filters.dateTo}
                onChange={handleChange}
                className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Sender</label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              name="sender"
              value={filters.sender}
              onChange={handleChange}
              placeholder="Search by sender"
              className="pl-10 w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Amount Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="minAmount"
              value={filters.minAmount || ''}
              onChange={handleChange}
              placeholder="Min"
              min="1"
              className="w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
            <input
              type="number"
              name="maxAmount"
              value={filters.maxAmount || ''}
              onChange={handleChange}
              placeholder="Max"
              min="1"
              className="w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>
    </div>
  );
}