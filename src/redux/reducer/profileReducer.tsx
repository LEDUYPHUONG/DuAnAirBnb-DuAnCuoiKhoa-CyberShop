import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface ProfileRoomModel {
  id: number;
  maPhong: number;
  ngayDen: Date;
  ngayDi: Date;
  soLuongKhach: number;
  maNguoiDung: number;
}
export interface ProfileUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: null;
  birthday: string;
  avatar: null;
  gender: boolean;
  role: string;
}

const initialState: any = {
  arrProfileRoom: [],
  arrProfileUser: [],
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    getProfileRoomAction: (state, action: PayloadAction<ProfileRoomModel[]>) => {
      state.arrProfileRoom = action.payload;
    },
    getProfileUserAction: (state, action: PayloadAction<ProfileUser[]>) => {
      state.arrProfileUser = action.payload;
    },
  }  
});

export const { getProfileRoomAction, getProfileUserAction } = profileReducer.actions;

export default profileReducer.reducer;

// action api

export const getProfileRoomApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("dat-phong/lay-theo-nguoi-dung/1");
      let arrProfileRoom: ProfileRoomModel[] = result.data.content;
      const action = getProfileRoomAction(arrProfileRoom);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
export const getProfileUserApi = () => {
  return async (dispacth: AppDispatch) => {
    try {
      const result = await http.get("/users");
      let arrProfileUser: ProfileUser[] = result.data.content;
      const action = getProfileUserAction(arrProfileUser);
      dispacth(action);
    } catch (err) {
      console.log(err);
    }
  }
}
