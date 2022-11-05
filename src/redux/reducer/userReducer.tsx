import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setCookie,
  setStore,
  USER_LOGIN,
  history,
  getCookie,
  setStoreJson,
} from "../../util/setting";
import { AppDispatch, RootState } from "../configStore";

export interface UserLoginModel {
  email: string;
  password: string;
}

export interface UserReducerState {
  userLogin: UserLoginModel;
}
const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
};

const userLoginReducer = createSlice({
  name: "userLoginReducer",
  initialState,
  reducers: {
    getUserProfile_Action: (state, action: PayloadAction<UserLoginModel>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { getUserProfile_Action } = userLoginReducer.actions;

export default userLoginReducer.reducer;

export const loginApi = (userLogin: UserLoginModel) => {
  return async (dispatch: AppDispatch) => {
    console.log("userLogin", userLogin);

    try {
      let result = await http.post("/auth/signin" , userLogin);
      //sau khi đăng nhập thành công lưu dữ liệu vào local hoặc cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.token, 30);
      setStore(ACCESS_TOKEN, result.data.content.token);
      setTimeout(() => {
        history.push(`/profile/${result.data.content.user.id}`);
      }, 2000);
      console.log(result.data.content.user.id);
      dispatch(getProfileApi())
    } catch (err) {
      console.log(err);
      alert("Đăng nhập không thành công. Kiểm tra lại email và mật khẩu!")
    }
  };
};

export const getProfileApi = () => {
  return async (dispatch:AppDispatch) => {
    try {    
     let result = await http.get("/users");
      // lưu cả thông tin của user (tên, dob, v.v..) vào local để nếu ở trang profile có f5 thì sẽ ko bị trắng mà vẫn render bình thường
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};