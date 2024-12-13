import api from "./api";
import type {
  Transaction,
  TransactionFilters,
  PaginatedResponse,
} from "../types/transaction";

export async function getTransactions(
  page: number = 1,
  limit: number = 10,
  filters?: TransactionFilters
): Promise<PaginatedResponse<Transaction>> {
  const params = new URLSearchParams();
  params.append("page", page.toString());

  if (filters) {
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined && value !== "") {
          params.append(key, value.toString());
        }
      });
  }

  try {
    const response = await api.get(`/transactions?${params.toString()}`);
    return {
      data: response.data.data.map((transaction: any) => ({
        id: transaction._id,
        amount: transaction.amount,
        sender: transaction.sender,
        // recipient: transaction.recipient,
        status: transaction.status,
        createdAt: transaction.createdAt,
        updatedAt: transaction.updatedAt,
      })),
      total: response.data.total,
      page: response.data.currentPage,
      limit: limit,
    };
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw new Error("Unable to fetch transactions");
  }
}




export async function getStatistics(): Promise<any> {
  try {
    const response = await api.get("/transactions/statistics");
    return response.data;
  } catch (error) {
    console.error("Error fetching statistics:", error);
    throw new Error("Unable to fetch statistics");
  }
}



