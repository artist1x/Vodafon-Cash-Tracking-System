import { useState } from "react";
import { Activity, DollarSign, Users, Clock, TrendingUp } from "lucide-react";
import StatCard from "../components/Dashboard/StatCard";
import TransactionChart from "../components/Dashboard/TransactionChart";
import RecentTransactions from "../components/Dashboard/RecentTransactions";
import ErrorAlert from "../components/Common/ErrorAlert";
import { useAnalytics } from "../hooks/useAnalytics";
import TransactionFilters from "../components/Transactions/TransactionFilters"; // import filters

export default function Dashboard() {
  const [filters, setFilters] = useState({
    dateFrom: "",
    dateTo: "",
    sender: "",
    status: "",
    minAmount: "",
    maxAmount: "",
  });

  const { analytics, trends, transactions, isLoading, error } =
    useAnalytics(filters);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  if (isLoading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-red-600 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return <ErrorAlert message={error} onDismiss={() => null} />;
  }

  if (!analytics) {
    return null;
  }

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="space-y-8 px-4 py-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Track your transaction metrics and performance
          </p>
        </div>
        <p className="mt-4 sm:mt-0 text-sm text-gray-600">
          Last updated: {new Date().toLocaleString()}
        </p>
      </div>

      {/* Filters */}
      <TransactionFilters onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
        <StatCard
          title="Total Transactions"
          value={analytics.totalTransactions.toLocaleString()}
          icon={Activity}
          description="Current month"
        />
        <StatCard
          title="Total Amount"
          value={`$${analytics.totalAmount.toLocaleString()}`}
          icon={DollarSign}
          trend={{
            value: analytics.monthlyGrowth,
            isPositive: analytics.monthlyGrowth >= 0,
          }}
        />
        <StatCard
          title="Success Rate"
          value={`${analytics.successRate}%`}
          icon={Users}
          description="Completed transactions"
        />
        <StatCard
          title="Average Amount"
          value={`$${analytics.averageAmount.toLocaleString()}`}
          icon={TrendingUp}
          description="Per transaction"
        />
        <StatCard
          title="Pending"
          value={analytics.pendingTransactions}
          icon={Clock}
          description="Awaiting processing"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Transaction Trends
          </h2>
          <div className="h-[400px]">
            <TransactionChart data={trends} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-900 p-6 border-b">
            Recent Transactions
          </h2>
          <RecentTransactions transactions={recentTransactions} />
        </div>
      </div>
    </div>
  );
}
