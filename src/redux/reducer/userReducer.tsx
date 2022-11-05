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
    setUserLogin_Action: (state, action: PayloadAction<UserLoginModel>) => {
      state.userLogin = action.payload;
    },
  },
});

export const { setUserLogin_Action } = userLoginReducer.actions;

export default userLoginReducer.reducer;

export const loginApi = (userLogin: UserLoginModel) => {
  return async (dispatch: AppDispatch) => {
    console.log("userLogin", userLogin);

    try {
      let result = await http.post("/auth/signin" , userLogin);
      //sau khi đăng nhập thành công lưu dữ liệu vào local hoặc cookie
      console.log(result);
      setCookie(ACCESS_TOKEN, result.data.token, 30);
      setStore(ACCESS_TOKEN, result.data.token);
      setTimeout(() => {
        history.push("/profile");
      }, 2000);
    //   dispatch(setUserLogin_Action(userLogin));
    } catch (err) {
      console.log(err);
      history.push("/");
    }
  };
};

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
