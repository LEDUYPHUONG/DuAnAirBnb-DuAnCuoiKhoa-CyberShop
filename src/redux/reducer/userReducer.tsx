import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getCookie,
  getStoreJson,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/setting";
import { AppDispatch } from "../configStore";

// import { historyBrowser } from "../../index";

export interface userLoginModel {
  email: string;
  password: string;
}

const initialState = {
  //chọn getStoreJson để nhận dữ liệu lưu ở strore dưới dạng json
  userLogin: getStoreJson(USER_LOGIN),
};

const userLogin = createSlice({
  name: "userLoginReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getProfileAction } = userLogin.actions;

export default userLogin.reducer;

// call api

// export const loginApi = (userLogin: userLoginModel) => {
//   return async (dispatch: AppDispatch) => {
//     console.log("đây là của loginApi", userLogin);
//     try {
//       let result = await axios({
//         url: "https://shop.cyberlearn.vn/api/Users/signin",
//         method: "POST",
//         data: userLogin,
//       });
//       //sau khi đăng nhập thành công lưu dữ liệu vào local hoặc cookie
//       console.log(result);
//       setCookie(ACCESS_TOKEN, result.data.content.accessToken, 30);
//       setStore(ACCESS_TOKEN, result.data.content.accessToken);
//       setTimeout(() => {
//         historyBrowser.push("/profile");
//       }, 5000);
//       dispatch(getProfileApi());
//     } catch (err) {
//       console.log(err);
//       historyBrowser.push("/");
//     }
//   };
// };

// export const getProfileApi = (tokenReceived = getCookie(ACCESS_TOKEN)) => {
//   return async (dispatch) => {
//     try {
//       let result = await axios({
//         url: "https://shop.cyberlearn.vn/api/Users/getProfile",
//         method: "POST",
//         headers: {
//           Authorization: "Bearer " + tokenReceived,
//           //chỗ Bearer có dấu cách vì đó là do backend nó quy định ở API, chúng ta phải tuân theo
//         },
//       });
//       dispatch(getProfileAction(result.data.content));

//       // lưu cả thông tin của user (tên, dob, v.v..) vào local để nếu ở trang profile có f5 thì sẽ ko bị trắng mà vẫn render bình thường
//       setStoreJson(USER_LOGIN, result.data.content);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };
