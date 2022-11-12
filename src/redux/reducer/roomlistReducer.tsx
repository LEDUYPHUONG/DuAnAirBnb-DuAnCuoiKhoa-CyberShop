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

interface RoomlistStateModel{
  arrRoomlist: RoomlistModel[],
  roomId: RoomlistModel,
}

const initialState: RoomlistStateModel = {
  arrRoomlist: [],
  roomId: {
    id: 0,
    tenPhong: '',
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: '',
    giaTien: 0,
    mayGiat: false,
    banLa: false,
    tivi: false,
    dieuHoa: false,
    wifi: false,
    bep: false,
    doXe: false,
    hoBoi: false,
    banUi: false,
    maViTri: 0,
    hinhAnh: '',
  }
};

const roomlistReducer = createSlice({
  name: "roomlistReducer",
  initialState,
  reducers: {
    getRoomlistAction: (state, action: PayloadAction<RoomlistModel[]>) => {
      state.arrRoomlist = action.payload;
    },
    getRoomidAction: (state, action: PayloadAction<RoomlistModel>) => {
      state.roomId = action.payload;
    },
  },
});

export const { getRoomlistAction, getRoomidAction } = roomlistReducer.actions;

export default roomlistReducer.reducer;

// action api

export const getRoomlistApi = (id:number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`);
      let arrRoomlist: RoomlistModel[] = result.data.content;
      const action = getRoomlistAction(arrRoomlist);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
