/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API_ROUTES } from "../ApiRoutes";
import { fetchRefreshToken } from "../api/auth.api";
import TokenService from "./token.service";

export const baseApi = process.env.REACT_APP_API_URL;

const token = TokenService.getToken()?.access_token;
const instance = axios.create({
  baseURL: baseApi
});
instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

let refreshing_token: any = null;

instance.interceptors.request.use(
  (config: any) => {
    const accessToken = TokenService.getToken()?.access_token;
    if (accessToken && config.url !== API_ROUTES.oauth2) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async function (error: any) {
    const originalRequest = error.config;
    if (error.response?.status === 401 && originalRequest.url === API_ROUTES.oauth2) {
      return Promise.reject(error);
    }

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        refreshing_token = refreshing_token ? refreshing_token : fetchRefreshToken();
        const new_token = await refreshing_token;
        refreshing_token = null;
        instance.defaults.headers.common["Authorization"] = `Bearer ${new_token?.access_token}`;
        originalRequest.headers = {
          Authorization: `Bearer ${new_token?.access_token}`
        };
        return instance(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }

    const errObj = error?.response?.data?.message ? error.response.data?.message : error;
    return Promise.reject(errObj);
  }
);

export const GET = (url: string, config?: any) => {
  return instance.get(url, config);
};

export const POST = (url: string, body: any, config?: any) => {
  return instance.post(url, body, config);
};

export const PATCH = (url: string, body: any) => {
  return instance.patch(url, body);
};

export const PUT = (url: string, body: any) => {
  return instance.put(url, body);
};

export const DELETE = (url: string) => {
  return instance.delete(url);
};

export default instance;
