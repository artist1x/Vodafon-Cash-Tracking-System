export interface Transaction {
  id: string;
  amount: number;
  sender: string;
  // recipient: string;
  status: 'pending' | 'completed' | 'failed';
  createdAt: string;
  updatedAt: string;
}

export interface TransactionFilters {
  dateFrom?: string;
  dateTo?: string;
  sender?: string;
  minAmount?: number;
  maxAmount?: number;
  status?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}