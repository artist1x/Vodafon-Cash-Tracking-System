import { ApiService } from './api.service';
import { ENDPOINTS } from '../config/constants';

export interface User {
  id: string;
  username: string;
  role: string;
}

export class UserService {
  private static instance: UserService;
  private apiService = ApiService.getInstance();

  private constructor() {}

  static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getAllUsers(): Promise<User[]> {
    return this.apiService.get<User[]>(ENDPOINTS.USERS.GET_ALL);
  }

  async createUser(userData: Partial<User>): Promise<User> {
    return this.apiService.post<User>(ENDPOINTS.USERS.CREATE, userData);
  }

  async updateUser(id: string, userData: Partial<User>): Promise<User> {
    return this.apiService.put<User>(ENDPOINTS.USERS.UPDATE(id), userData);
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    return this.apiService.delete<{ message: string }>(ENDPOINTS.USERS.DELETE(id));
  }
}