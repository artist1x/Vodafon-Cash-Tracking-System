import api from './api';
import type { User } from '../types/auth';

export async function getUsers(): Promise<User[]> {
  const response = await api.get('/users');
  return response.data.map((user: any) => ({
    id: user._id,
    username: user.username,
    role: user.role,
  }));
}

export async function createUser(userData: Omit<User, 'id'>): Promise<User> {
  const response = await api.post('/users', userData);
  return {
    id: response.data._id,
    username: response.data.username,
    password: response.data.password,
    role: response.data.role,
  };
}

export async function updateUser(id: string, userData: Partial<User>): Promise<User> {
  const response = await api.put(`/users/${id}`, userData);
  return {
    id: response.data._id,
    username: response.data.username,
    password: response.data.password,
    role: response.data.role,
  };
}

export async function deleteUser(id: string): Promise<void> {
  await api.delete(`/users/${id}`);
}