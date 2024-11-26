export interface UserAuth {
  id: string;
  email: string;
  role: 'admin' | 'user';
}

export interface LoginForm {
  email: string;
  password: string;
} 