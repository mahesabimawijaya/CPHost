export interface User {
  id: string;
  email: string;
  password?: string;
  role: string;
  firstName: string;
  lastName: string;
}

export interface UserLoginPayload {
  email: string;
  password: string;
}

export interface UserWithTokens extends User {
  accessToken: string;
  refreshToken: string;
  id: string;
}
