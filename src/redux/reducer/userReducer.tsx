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
  USER_ID,
} from "../../util/setting";
import { AppDispatch, RootState } from "../configStore";

export interface UserLoginModel {
  email: string;
  password: string;
}
export interface SignUpModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
}

export interface UserReducerState {
  userLogin: UserLoginModel;
  userSignup: SignUpModel;
}

const initialState = {
  userLogin: getStoreJson(USER_LOGIN) || {},
  // userSignup: {
  // },
};

const userLoginReducer = createSlice({
  name: "userLoginReducer",
  initialState,
  reducers: {
    getUserProfile_Action: (state, action: PayloadAction<UserLoginModel>) => {
      state.userLogin = action.payload;
    },
    // setSignUp_Action: (state, action: PayloadAction<SignUpModel>) => {
    //   state.userSignup = action.payload;
    // },
  },
});

export const { getUserProfile_Action } = userLoginReducer.actions;

export default userLoginReducer.reducer;

export const loginApi = (userLogin: UserLoginModel) => {
  return async (dispatch: AppDispatch) => {
    console.log("userLogin", userLogin);

    try {
      let result = await http.post("/auth/signin", userLogin);
      //sau khi đăng nhập thành công lưu dữ liệu vào local hoặc cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.content.token, 30);
      setStore(ACCESS_TOKEN, result.data.content.token);
      setStore(USER_ID, result.data.content.user.id)
      setTimeout(() => {
        history.push(`/profile/${result.data.content.user.id}`);
        window.location.reload();
      }, 2000);
      console.log(result.data.content.user.id);
      dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
      alert("Đăng nhập không thành công. Kiểm tra lại email và mật khẩu!");
    }
  };
};

export const getProfileApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get("/users");
      // lưu cả thông tin của user (tên, dob, v.v..) vào local để nếu ở trang profile có f5 thì sẽ ko bị trắng mà vẫn render bình thường
      setStoreJson(USER_LOGIN, result.data.content);
      getUserProfile_Action(result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signupApi = (frmSignUp: SignUpModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/auth/signup", frmSignUp);
      // dispatch(setSignUp_Action(frmSignUp));
      alert(
        "Đăng ký thành công! Hãy đăng nhập để trải nghiệm nhiều hơn từ chúng tôi ^^"
      );
      setTimeout(() => {
        history.push("/signin");
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log("dangkyErr", err);
    }
  };
};
