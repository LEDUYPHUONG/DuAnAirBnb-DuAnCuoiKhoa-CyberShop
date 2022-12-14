import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history, http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface AdmintUserModel {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
}
export interface AdminUserState {
  arrAdminUser: AdmintUserModel[];
  numberPage: number;
}
const initialState: AdminUserState = {
  arrAdminUser: [],
  numberPage: 1,
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    setArrAdminUserApi: (
      state: AdminUserState,
      action: PayloadAction<AdmintUserModel[]>
    ) => {
      state.arrAdminUser = action.payload;
    },
    setNumberPage: (state: AdminUserState, action: PayloadAction<number>) => {
      state.numberPage = action.payload;
    },
  },
});

export const { setArrAdminUserApi, setNumberPage } = adminReducer.actions;

export default adminReducer.reducer;
//.........................API action thunk: UserManage.........................
export const getArrAdminUserApi = (numberPage: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(
        `/users/phan-trang-tim-kiem?pageIndex=${numberPage}&pageSize=5`
      );
      dispatch(setArrAdminUserApi(response.data.content.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changeRoleUserToAdmin = (id: number, newInfo: AdmintUserModel) => {
  return async () => {
    try {
      const response = await http.put(`/users/${id}`, newInfo);
      alert("Cập nhật Role thành công!");
      console.log(response);
      history.push("/admin/usermanage");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAccount = (id: number) => {
  return async () => {
    try {
      const response = await http.delete(`/users?id=${id}`);
      alert("Delete thành công!");
      console.log(response);
      history.push("/admin/usermanage");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};
//.........................API action thunk: LocationInfoManage.........................
