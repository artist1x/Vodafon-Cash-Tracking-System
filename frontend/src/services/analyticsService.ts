import api from './api';
import type { AnalyticsData, TransactionTrend } from '../types/analytics';

export async function getAnalyticsData(): Promise<AnalyticsData> {
  const response = await api.get('/analytics');
  return response.data;
}

export async function getTransactionTrends(): Promise<TransactionTrend[]> {
  const response = await api.get('/analytics/trends');
  return response.data;
}