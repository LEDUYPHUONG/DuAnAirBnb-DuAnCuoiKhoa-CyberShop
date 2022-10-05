import { Permission } from "./permission.model";

export interface TokenInfo {
  access_token?: string;
  refresh_token?: string;
}

export interface RefreshPayload {
  refresh_token?: string;
}

export interface IAccount {
  user: AccountInfo;
}
export interface AccountInfo {
  userId: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  email: string;
  personalEmail: string;
  city: string;
  state: string;
  isAdmin: boolean;
  hasAcceptedTerms: boolean;
  permissions: Permission;
}

export const TOKEN_KEY = "token";
