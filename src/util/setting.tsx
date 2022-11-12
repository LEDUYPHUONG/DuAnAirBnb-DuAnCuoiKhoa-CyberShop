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
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
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
  logout: () =>{
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(USER_INFO);
    history.push('/signin');
    window.location.reload()
  },
  ACCESS_TOKEN: "accessToken(token của người dùng)",
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
  USER_INFO
} = config;

const DOMAIN = "https://airbnbnew.cybersoft.edu.vn/api";
const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
  //token-cũ còn xài được: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMCIsIkhldEhhblN0cmluZyI6IjE3LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NjU5MjAwMDAwMCIsIm5iZiI6MTY0ODIyNzYwMCwiZXhwIjoxNjc2NzM5NjAwfQ.aK-3RvHXQyu6H2-FFiafeSKR4UMCcRmnuDbTT-XIcUU
  //token-thầy Khải choh: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg

// cấu hình request cho tất cả api - response cho tất cả kết quả từ api trả về

// cấu hình domain gửi đi
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000, //5 phut
});
// cấu hình request header

http.interceptors.request.use(
    (config:AxiosRequestConfig)  => {

        const token = getStore(ACCESS_TOKEN);
        if(config.headers){
            config.headers  = {
                ['tokenCybersoft']: TOKEN_CYBERSOFT,
                ['token']: token
            }
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// cấu hình kết quả trả về
http.interceptors.response.use((response) => {
    return response;
  },
  (err) => {
    console.log(err.response.status);
    if(err.response.status === 400 || err.response.status === 404){
        // history.push('/');
        return Promise.reject(err)
    }

    if (err.response.status === 401 || err.response.status === 403) {
      alert("Token không hợp lệ! Vui lòng đăng nhập lại!");
      // history.push('/login');
      return Promise.reject(err);
    }
  }
);

     
export const history = createBrowserHistory({})

/**
 * status code
 * 400: tham số gửi lên không hợp lệ => kết quả không tìm được (badrequest);
 * 404: tham số gửi lên hợp lệ nhưng không tìm thấy => có thể bị xóa rồi (Not found)...
 * 200: thành công, ok
 * 201: đã được tạo thành công => (mình đã tạo rồi, sau đó request tiếp thì sẽ trả 201 ) (Created)
 * 401: không có quyền truy cập vào api đó (Unauthorize -  có thể do token không hợp lệ hoặc bị admin chặn)
 * 403: chưa đủ quyền truy cập vào api đó (Forbiden - token hợp lệ tuy nhiên token đó chưa đủ quyền truy cập vào api)
 * 500: lỗi xãyr ra tại server (có thể frontend gửi dữ liệu không hợp lệ => backend trong quá trình xữ lý code gây ra lỗi hoặc do backend code bị lỗi => Error in server )
 */
