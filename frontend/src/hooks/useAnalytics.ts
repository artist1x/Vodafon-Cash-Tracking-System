import { useState, useEffect } from "react";
import { getTransactions, getStatistics } from "../services/transactionService";
import { calculateAnalytics, calculateTrends } from "../utils/analyticsUtils";
import type { Transaction } from "../types/transaction";
import type { AnalyticsData, TransactionTrend } from "../types/analytics";

export function useAnalytics(filters) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [trends, setTrends] = useState<TransactionTrend[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch transactions for the current month with filters applied
        const transactionsResponse = await getTransactions(1, 1000, filters);

        // Set transactions state
        setTransactions(transactionsResponse.data);

        // Fetch statistics (Optional, depends on حاجة البيانات)
        const statsResponse = await getStatistics();

        // Assuming statsResponse contains the statistics data
        const analyticsData = calculateAnalytics(
          transactionsResponse.data,
          statsResponse
        );
        setAnalytics(analyticsData);

        // Calculate trends from transactions
        const trendsData = calculateTrends(transactionsResponse.data);
        setTrends(trendsData);
      } catch (err) {
        setError("Failed to load analytics data");
        console.error("Analytics error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [filters]); // Re-fetch when filters change

  return { analytics, trends, transactions, isLoading, error };
}
