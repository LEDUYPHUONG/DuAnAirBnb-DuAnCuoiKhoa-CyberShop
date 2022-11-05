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
    id: 1286,
    name: 'NguyenMinhHoang',
    email: 'kennen@gmail.com',
    password: '',
    phone: '0921392103',
    birthday: '05/11/2022',
    gender: false,
    avatar: 'https://airbnbnew.cybersoft.edu.vn/avatar/03-11-2022-01-07-31-eo-gio-1024x768-1.jpeg',
    role: 'ADMIN',
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

export const getProfileRoomApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("dat-phong/lay-theo-nguoi-dung/1");
      dispatch(getProfileRoomAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
export const getProfileUserApi = (userid: string) => {
  return async (dispacth: AppDispatch) => {
    try {
      const result = await http.get(`/users/${userid}`);
      dispacth(getProfileUserAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  }
}
