import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface roomDetailModel {
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

export interface bookedRoomModel {
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}

const initialState: any = {
  objectRoomDetail: {},
  arrBookedRoom: [],
};

const roomDetailReducer = createSlice({
  name: "roomDetailReducer",
  initialState,
  reducers: {
    getRoomDetailAction: (state, action: PayloadAction<roomDetailModel>) => {
      state.objectRoomDetail = action.payload;
    },
    getBookedRoomAction: (state, action: PayloadAction<bookedRoomModel[]>) => {
      state.arrBookedRoom = action.payload;
    },
  },
});

export const { getRoomDetailAction, getBookedRoomAction } =
  roomDetailReducer.actions;

export default roomDetailReducer.reducer;

// call API

export const getRoomDetailApi = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.get(`/phong-thue/${id}`);
      dispatch(getRoomDetailAction(result.data.content));
    } catch (err) {
      console.log("getRoomDetailApiErr", err);
    }
  };
};

export const getBookedRoomApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get("/dat-phong");

      dispatch(getBookedRoomAction(result.data.content));
    } catch (err) {
      console.log("getBookedRoomApiErr", err);
    }
  };
};
