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




const initialState: any = {
    arrProfileRoom:[],
};



const profileReducer = createSlice ({
    name:"profileReducer",
    initialState,
    reducers: {
          getProfileRoomAction: (state, action: PayloadAction<ProfileRoomModel[]>) => {
          state.arrProfileRoom = action.payload;
        },
    },
})


export const {getProfileRoomAction} = profileReducer.actions;

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