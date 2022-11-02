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

const initialState:any = {
  objectRoomDetail: {},
};

const roomDetailReducer = createSlice({
  name: "roomDetailReducer",
  initialState,
  reducers: {
    getRoomDetailAction: (state, action: PayloadAction<roomDetailModel>) => {
      state.objectRoomDetail = action.payload;
    },
  },
});

export const {getRoomDetailAction} = roomDetailReducer.actions;

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
