import { Http, HttpResponse } from '@nativescript/core';
import { API_URL } from '../config/constants';

export async function request<T>(endpoint: string, options: {
  method: string;
  headers?: { [key: string]: string };
  body?: any;
  params?: { [key: string]: string };
}): Promise<T> {
  try {
    const queryString = options.params ? `?${new URLSearchParams(options.params).toString()}` : '';
    const url = `${API_URL}${endpoint}${queryString}`;

    const response = await Http.request({
      url,
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      content: options.body ? JSON.stringify(options.body) : undefined
    });

    return response.content.toJSON();
  } catch (error) {
    console.error('HTTP Request Error:', error);
    throw error;
  }
}