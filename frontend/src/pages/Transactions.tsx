import { useState, useEffect, useMemo } from "react";
import { getTransactions } from "../services/transactionService"; // التأكد من استيراد الدالة
import { filterTransactionsByDateRange } from "../utils/dateUtils";
import TransactionFilters from "../components/Transactions/TransactionFilters";
import TransactionTable from "../components/Transactions/TransactionTable";
import Pagination from "../components/Common/Pagination";
import ErrorAlert from "../components/Common/ErrorAlert";
import type {
  Transaction,
  TransactionFilters as Filters,
} from "../types/transaction";

const ITEMS_PER_PAGE = 10;

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<Filters>({});

  useEffect(() => {
    const fetchTransactions = async () => {
      setIsLoading(true);
      setError(null);
      try {
       
        const response = await getTransactions(
          currentPage,
          ITEMS_PER_PAGE,
          filters
        );
        setTransactions(response.data); // تخزين المعاملات في الحالة
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : "Failed to fetch transactions";
        setError(message);
        setTransactions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTransactions();
  }, [currentPage, filters]); // إضافة التغييرات في الـ filters أو الصفحة للمصفوفة

  const filteredTransactions = useMemo(() => {
    let filtered = [...transactions];

    if (filters.dateFrom && filters.dateTo) {
      filtered = filterTransactionsByDateRange(
        filtered,
        new Date(filters.dateFrom),
        new Date(filters.dateTo)
      );
    }

    if (filters.sender) {
      filtered = filtered.filter((t) =>
        t.sender.toLowerCase().includes(filters.sender!.toLowerCase())
      );
    }

    if (filters.minAmount) {
      filtered = filtered.filter((t) => t.amount >= filters.minAmount!);
    }

    if (filters.maxAmount) {
      filtered = filtered.filter((t) => t.amount <= filters.maxAmount!);
    }

    if (filters.status) {
      filtered = filtered.filter((t) => t.status === filters.status);
    }

    return filtered;
  }, [transactions, filters]);

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredTransactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredTransactions, currentPage]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <div className="space-y-6 px-4 py-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
          <p className="mt-2 text-sm text-gray-600">
            View and manage all transactions
          </p>
        </div>
      </div>

      {error && <ErrorAlert message={error} onDismiss={() => setError(null)} />}

      <TransactionFilters onFilterChange={handleFilterChange} />

      <div className="bg-white shadow-lg rounded-lg">
        <TransactionTable
          transactions={paginatedTransactions}
          isLoading={isLoading}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
