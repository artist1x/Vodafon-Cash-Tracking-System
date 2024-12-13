import { Http, HttpResponse } from '@nativescript/core';
import { API_URL } from '../config/constants';
import { AuthService } from './auth.service';

export class ApiService {
  private static instance: ApiService;
  private authService = AuthService.getInstance();

  private constructor() {}

  static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async getHeaders(): Promise<{ [key: string]: string }> {
    const authState = await this.authService.getAuthState().toPromise();
    return {
      'Content-Type': 'application/json',
      ...(authState.token ? { 'Authorization': `Bearer ${authState.token}` } : {})
    };
  }

  async get<T>(endpoint: string, params?: Record<string, any>): Promise<T> {
    try {
      const headers = await this.getHeaders();
      const queryString = params ? `?${new URLSearchParams(params).toString()}` : '';
      
      const response = await Http.request({
        url: `${API_URL}${endpoint}${queryString}`,
        method: 'GET',
        headers
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    try {
      const headers = await this.getHeaders();
      
      const response = await Http.request({
        url: `${API_URL}${endpoint}`,
        method: 'POST',
        headers,
        content: JSON.stringify(data)
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    try {
      const headers = await this.getHeaders();
      
      const response = await Http.request({
        url: `${API_URL}${endpoint}`,
        method: 'PUT',
        headers,
        content: JSON.stringify(data)
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete<T>(endpoint: string): Promise<T> {
    try {
      const headers = await this.getHeaders();
      
      const response = await Http.request({
        url: `${API_URL}${endpoint}`,
        method: 'DELETE',
        headers
      });

      return this.handleResponse<T>(response);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleResponse<T>(response: HttpResponse): T {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      return response.content.toJSON();
    }
    throw new Error(`HTTP Error: ${response.statusCode}`);
  }

  private handleError(error: any): Error {
    console.error('API Error:', error);
    if (error.response) {
      const message = error.response.content.toJSON()?.error || 'Unknown error occurred';
      return new Error(message);
    }
    return error;
  }
}