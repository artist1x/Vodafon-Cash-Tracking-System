import { Observable, BehaviorSubject } from 'rxjs';
import { Http } from '@nativescript/core';
import { StorageService } from './storage.service';
import { API_URL, ENDPOINTS } from '../config/constants';

export interface AuthState {
  token: string | null;
  user: any | null;
  isAuthenticated: boolean;
}

export class AuthService {
  private static instance: AuthService;
  private storageService = StorageService.getInstance();
  private authState = new BehaviorSubject<AuthState>({
    token: null,
    user: null,
    isAuthenticated: false
  });

  private constructor() {
    this.loadStoredAuth();
  }

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  private async loadStoredAuth(): Promise<void> {
    try {
      const token = await this.storageService.getItem('auth_token');
      const userStr = await this.storageService.getItem('auth_user');
      
      if (token && userStr) {
        const user = JSON.parse(userStr);
        this.setAuthState({
          token,
          user,
          isAuthenticated: true
        });
      }
    } catch (error) {
      console.error('Error loading stored auth:', error);
    }
  }

  async login(username: string, password: string): Promise<boolean> {
    try {
      const response = await Http.request({
        url: `${API_URL}${ENDPOINTS.AUTH.LOGIN}`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        content: JSON.stringify({ username, password })
      });

      const result = response.content.toJSON();
      
      if (result.token) {
        await this.storageService.setItem('auth_token', result.token);
        await this.storageService.setItem('auth_user', JSON.stringify(result.user));
        
        this.setAuthState({
          token: result.token,
          user: result.user,
          isAuthenticated: true
        });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  }

  async logout(): Promise<void> {
    try {
      await this.storageService.removeItem('auth_token');
      await this.storageService.removeItem('auth_user');
      
      this.setAuthState({
        token: null,
        user: null,
        isAuthenticated: false
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  getAuthState(): Observable<AuthState> {
    return this.authState.asObservable();
  }

  private setAuthState(state: AuthState): void {
    this.authState.next(state);
  }
}