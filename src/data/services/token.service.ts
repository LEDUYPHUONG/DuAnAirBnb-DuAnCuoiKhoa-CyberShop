import { doLogout } from "../api/auth.api";
import { TokenInfo, TOKEN_KEY } from "../models/auth.model";

const errorNotification = console.error;

export const getToken = (): TokenInfo | null => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token === null) {
      return null;
    }
    return JSON.parse(token);
  } catch (error) {
    errorNotification("Invalid Token. Redirecting to /login");
    setTimeout(doLogout, 300);
    return null;
  }
};

export const setToken = (tokenInfo: TokenInfo): void => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(tokenInfo));
};

export const deleteToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const TokenService = {
  getToken,
  setToken,
  deleteToken
};
export default TokenService;
