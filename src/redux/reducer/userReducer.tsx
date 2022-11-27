import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ACCESS_TOKEN,
  getStoreJson,
  http,
  setStore,
  USER_LOGIN,
  history,
  setStoreJson,
  USER_ID,
  USER_INFO,
} from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface UserLoginModel {
  email: string;
  password: string;
}
export interface UserSignUpModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  gender: boolean;
  role: string;
  avatar: string;
}

export interface UserReducerState {
  userLogin: UserLoginModel;
  userSignup: UserSignUpModel;
}

const initialState = {
  userLogin: getStoreJson(USER_LOGIN),
  userSignup: JSON.parse(getStoreJson(USER_INFO)),
};

const userLoginReducer = createSlice({
  name: "userLoginReducer",
  initialState,
  reducers: {
    setUserSignup: (state, action: PayloadAction<UserSignUpModel>) => {
      state.userSignup = action.payload;
    },
  },
});

export const { setUserSignup } = userLoginReducer.actions;

export default userLoginReducer.reducer;

export const loginApi = (formLogin: UserLoginModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/auth/signin", formLogin);
      (
        document.getElementById("login_btn") as HTMLButtonElement
      ).style.display = "none";
      (document.getElementById("spinner") as HTMLButtonElement).style.display =
        "block";
      setStore(ACCESS_TOKEN, result.data.content.token);
      setStore(USER_ID, result.data.content.user.id);
      setStoreJson(USER_INFO, result.data.content.user);
      setTimeout(() => {
        history.push("/profile");
        window.location.reload();
      }, 500);
      // dispatch(getProfileApi());
    } catch (err) {
      console.log(err);
      alert("Đăng nhập không thành công. Kiểm tra lại email và mật khẩu!");
    }
  };
};

// export const getProfileApi = () => {
//   return async () => {
//     try {
//       let result = await http.get("/users");
//       console.log('result getProfileApi',result);
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

export const signupApi = (frmSignUp: UserSignUpModel) => {
  return async () => {
    try {
      let result = await http.post("/auth/signup", frmSignUp);
      console.log("result signupApi", result);

      alert("Đăng ký thành công!");
      setTimeout(() => {
        history.push("/signin");
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.log("dangkyErr", err);
    }
  };
};
