import { Http, HttpResponse } from '@nativescript/core';
import { API_URL, ENDPOINTS } from '../config/constants';
import { AuthService } from './auth.service';

export interface Transaction {
  id: string;
  sender: string;
  receiver: string;
  amount: number;
  type: string;
  timestamp: string;
}

export interface TransactionFilter {
  range?: string;
  startDate?: string;
  endDate?: string;
  type?: string;
}

export class TransactionService {
  private static instance: TransactionService;
  private authService = AuthService.getInstance();

  private constructor() {}

  static getInstance(): TransactionService {
    if (!TransactionService.instance) {
      TransactionService.instance = new TransactionService();
    }
    return TransactionService.instance;
  }

  private async getHeaders(): Promise<{ [key: string]: string }> {
    const authState = await this.authService.getAuthState().toPromise();
    return {
      "Content-Type": "application/json",
      ...(authState.token
        ? { Authorization: `Bearer ${authState.token}` }
        : {}),
    };
  }

  async getTransactions(filter?: TransactionFilter): Promise<Transaction[]> {
    try {
      const headers = await this.getHeaders();
      const queryString = filter
        ? `?${new URLSearchParams(filter as any).toString()}`
        : "";

      const response = await Http.request({
        url: `${API_URL}${ENDPOINTS.TRANSACTIONS.GET_ALL}${queryString}`,
        method: "GET",
        headers,
      });

      return response.content.toJSON();
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  }

  async getTransaction(id: string): Promise<Transaction> {
    try {
      const headers = await this.getHeaders();
      const response = await Http.request({
        url: `${API_URL}${ENDPOINTS.TRANSACTIONS.GET_SINGLE(id)}`,
        method: "GET",
        headers,
      });

      return response.content.toJSON();
    } catch (error) {
      console.error("Error fetching transaction:", error);
      throw error;
    }
  }

  async sendMobileTransaction(
    transactionData: Partial<Transaction>
  ): Promise<{ message: string }> {
    try {
      const headers = await this.getHeaders();
      const response = await Http.request({
        url: `${API_URL}${ENDPOINTS.TRANSACTIONS.MOBILE}`,
        method: "POST",
        headers,
        content: JSON.stringify(transactionData),
      });

      return response.content.toJSON();
    } catch (error) {
      console.error("Error sending mobile transaction:", error);
      throw error;
    }
  }

  async createTransaction(
    transactionData: Partial<Transaction>
  ): Promise<Transaction> {
    try {
      console.log(
        "TransactionService: Creating transaction:",
        JSON.stringify(transactionData)
      );

      const headers = await this.getHeaders();
      console.log("TransactionService: Using headers:", headers);

      const response = await Http.request({
        url: `${API_URL}${ENDPOINTS.TRANSACTIONS.MOBILE}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        content: JSON.stringify(transactionData),
      });

      console.log("TransactionService: Response status:", response.statusCode);
      console.log(
        "TransactionService: Response content:",
        response.content.toString()
      );

      if (response.statusCode >= 200 && response.statusCode < 300) {
        return response.content.toJSON();
      } else {
        throw new Error(
          `HTTP Error: ${response.statusCode} - ${response.content.toString()}`
        );
      }
    } catch (error) {
      console.error("TransactionService Error:", error);
      throw error;
    }
  }
}