/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAccount, TokenInfo } from "../models/auth.model";
import { AxiosResponse } from "axios";
import { API_ROUTES } from "../ApiRoutes";
import { createBrowserHistory } from "history";
import instance, { POST } from "../services/api";
import TokenService from "../services/token.service";
import { handleTransformError } from "../services/transform-error.service";
import { ACCOUNT_ROUTES } from "../..";


export const isAuthenticated = (): boolean => {
  const token: TokenInfo | null = isUserLoggedIn();
  return token != null;
};

export const isUserLoggedIn = () => {
  return TokenService.getToken();
};

export const setSessionStorageToken = (tokenInfo: TokenInfo) => {
  TokenService.setToken(tokenInfo);
};

export const doLogout = () => {
  TokenService.deleteToken();
  history.push(ACCOUNT_ROUTES.LOGIN);
  window.location.reload();
};

const history = createBrowserHistory({});

export const login = async (loginPayload: any) => {
  try {
    const data: AxiosResponse<TokenInfo> = await POST(API_ROUTES.oauth2, {
      ...loginPayload,
      grant_type: "password"
    });
    setSessionStorageToken(data.data);
    instance.defaults.headers.common["Authorization"] = `Bearer ${data.data.access_token}`;

    return data.data;
  } catch (error) {
    handleTransformError(error);
  }
};

export const loginWithGoogle = async () => {
  const data: AxiosResponse<any> = await instance
    .get(API_ROUTES.googleSSO, { params: { connection: "google" } })
    .catch((error) => {
      throw error;
    });

  return data.data;
};

export const getAccountDetail = async () => {
  const data: AxiosResponse<IAccount> = await instance.get(API_ROUTES.users).catch((error) => {
    throw error;
  });
  return data.data.user;
};

export const fetchRefreshToken = async (): Promise<any> => {
  const token: TokenInfo | null = TokenService.getToken();
  const refreshToken: string | null | undefined = token ? token.refresh_token : null;
  try {
    const data: AxiosResponse<TokenInfo> = await instance.post(API_ROUTES.oauth2, {
      grant_type: "refresh_token",
      refresh_token: refreshToken
    });
    setSessionStorageToken(data.data);
    return data.data;
  } catch (error) {
    console.error("Error: ", error);
    doLogout();
  }
};
