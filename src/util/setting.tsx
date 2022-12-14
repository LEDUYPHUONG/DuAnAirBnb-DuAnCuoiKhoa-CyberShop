import axios from "axios";
// import {history} from '../index'
import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { createBrowserHistory } from "history";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  console.info(`[response] [${JSON.stringify(response)}]`);
  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[response error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

export function setupInterceptorsTo(
  axiosInstance: AxiosInstance
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
}

export const config = {
  setCookie: (name: string, value: string, days: number) => {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  },
  getCookie: (name: string) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  getStore: (name: string) => {
    if (localStorage.getItem(name)) {
      return localStorage.getItem(name);
    }
    return null;
  },
  setStore: (name: string, value: any) => {
    localStorage.setItem(name, value);
  },
  setStoreJson: (name: string, value: any) => {
    let json = JSON.stringify(value);
    localStorage.setItem(name, json);
  },
  getStoreJson: (name: string) => {
    if (localStorage.getItem(name)) {
      let result: any = localStorage.getItem(name);
      return result;
    }
    return null;
  },
  logout: () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_INFO);
    history.push("/signin");
    window.location.reload();
  },
  ACCESS_TOKEN: "accessToken(token c???a ng?????i d??ng)",
  USER_LOGIN: "userLogin",
  USER_ID: "userId",
  USER_INFO: "User_Info",
};

export const {
  setCookie,
  getCookie,
  getStore,
  setStore,
  setStoreJson,
  getStoreJson,
  logout,
  ACCESS_TOKEN,
  USER_LOGIN,
  USER_ID,
  USER_INFO,
} = config;

const DOMAIN = "https://airbnbnew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
//token-c?? c??n x??i ???????c: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU
//token-th???y Kh???i cho: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MSIsIkhldEhhblN0cmluZyI6IjEyLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDQ3NjgwMDAwMCIsIm5iZiI6MTY2NTI0ODQwMCwiZXhwIjoxNjk0NjI0NDAwfQ.SUELcPShU58ZkNS3CbFDhM02KMzll9j00ndjVSaiJ8Q

// c???u h??nh request cho t???t c??? api - response cho t???t c??? k???t qu??? t??? api tr??? v???

// c???u h??nh domain g???i ??i
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000, //5 phut
});
// c???u h??nh request header

http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getStore(ACCESS_TOKEN);
    if (config.headers) {
      config.headers = {
        tokenCybersoft: TOKEN_CYBERSOFT,
        token: token,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// c???u h??nh k???t qu??? tr??? v???
http.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    console.log(err.response.status);
    if (err.response.status === 400 || err.response.status === 404) {
      // history.push('/');
      return Promise.reject(err);
    }

    if (err.response.status === 401 || err.response.status === 403) {
      alert("Token kh??ng h???p l???! Vui l??ng ????ng nh???p l???i!");
      // history.push('/login');
      return Promise.reject(err);
    }
  }
);

export const history = createBrowserHistory({});

/**
 * status code
 * 400: tham s??? g???i l??n kh??ng h???p l??? => k???t qu??? kh??ng t??m ???????c (badrequest);
 * 404: tham s??? g???i l??n h???p l??? nh??ng kh??ng t??m th???y => c?? th??? b??? x??a r???i (Not found)...
 * 200: th??nh c??ng, ok
 * 201: ???? ???????c t???o th??nh c??ng => (m??nh ???? t???o r???i, sau ???? request ti???p th?? s??? tr??? 201 ) (Created)
 * 401: kh??ng c?? quy???n truy c???p v??o api ???? (Unauthorize -  c?? th??? do token kh??ng h???p l??? ho???c b??? admin ch???n)
 * 403: ch??a ????? quy???n truy c???p v??o api ???? (Forbiden - token h???p l??? tuy nhi??n token ???? ch??a ????? quy???n truy c???p v??o api)
 * 500: l???i x??yr ra t???i server (c?? th??? frontend g???i d??? li???u kh??ng h???p l??? => backend trong qu?? tr??nh x??? l?? code g??y ra l???i ho???c do backend code b??? l???i => Error in server )
 */
