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
  phone: string;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
}

export interface ProfileModel {
  arrProfileRoom: ProfileRoomModel[],
  arrProfileUser: ProfileUser
}


const initialState: ProfileModel = {
  arrProfileRoom: [],
  arrProfileUser: {
    id: 0,
    name: '',
    email: '',
    password: '',
    phone: '',
    birthday: '',
    gender: false,
    avatar: '',
    role: '',
  },
};

const profileReducer = createSlice({
  name: "profileReducer",
  initialState,
  reducers: {
    getProfileRoomAction: (state, action: PayloadAction<ProfileRoomModel[]>) => {
      state.arrProfileRoom = action.payload;
    },
    getProfileUserAction: (state, action: PayloadAction<ProfileUser>) => {
      state.arrProfileUser = action.payload;
    },
  }  
});

export const { getProfileRoomAction, getProfileUserAction } = profileReducer.actions;

export default profileReducer.reducer;

// action api

export const getProfileRoomApi = (idUser: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("dat-phong/lay-theo-nguoi-dung/" + idUser);
      dispatch(getProfileRoomAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
export const getProfileUserApi = (idUser: string) => {
  return async (dispacth: AppDispatch) => {
    try {
      const result = await http.get(`/users/${idUser}`);
      dispacth(getProfileUserAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  }
}

export const postProfileUserApi = (idUser: number, valueSubmit: FormData) => {
  return async (dispacth: AppDispatch) => {
    try {
      const result = await http.put(`/users/${idUser}`, valueSubmit);
      console.log(result);
      console.log(result.data.content);
    } catch (err) {
      console.log(err);
    }
  }
}
