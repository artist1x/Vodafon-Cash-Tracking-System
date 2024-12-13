export interface User {
  id: string;
  username: string;
  password: string;
  role: "Admin" | "Employee";
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}
