export interface LoginPayload {
  username: string;
  password: string;
}

export interface UserProfile {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  phone?: string;
  roles: string[];
  permissions: string[];
  email: string;
}
