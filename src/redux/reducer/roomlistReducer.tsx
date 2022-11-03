import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface RoomlistModel {
  id: number;
  tenPhong: string;
  khach: number;
  phongNgu: number;
  giuong: number;
  phongTam: number;
  moTa: string;
  giaTien: number;
  mayGiat: boolean;
  banLa: boolean;
  tivi: boolean;
  dieuHoa: boolean;
  wifi: boolean;
  bep: boolean;
  doXe: boolean;
  hoBoi: boolean;
  banUi: boolean;
  maViTri: number;
  hinhAnh: string;
}

const initialState: any = {
  arrRoomlist: [],
};

const roomlistReducer = createSlice({
  name: "roomlistReducer",
  initialState,
  reducers: {
    getRoomlistAction: (state, action: PayloadAction<RoomlistModel[]>) => {
      state.arrRoomlist = action.payload;
    },
  },
});

export const {getRoomlistAction} = roomlistReducer.actions;

export default roomlistReducer.reducer;

// action api

export const getRoomlistApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("phong-thue/lay-phong-theo-vi-tri?maViTri=1");
      let arrRoomlist: RoomlistModel[] = result.data.content;
      const action = getRoomlistAction(arrRoomlist);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
