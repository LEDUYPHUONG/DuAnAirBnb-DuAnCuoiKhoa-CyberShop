import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
import { number } from "yup/lib/locale";
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
export interface arrCommentModel {
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
  tenNguoiBinhLuan: string;
  avatar: string;
}

export interface BookingRoomModel {
  id: string;
  maPhong: string;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: string;
  maNguoiDung: string;
}

export interface NgayDenNgayDiModel {
  // ngayDen: string;
  // ngayDi: string;
}
export interface RoomDetailState {
  objectRoomDetail: roomDetailModel;
  arrBookedRoom: bookedRoomModel[];
  numberStayDates: number;
  arrComment: arrCommentModel[];
  bookingRoom: BookingRoomModel;
 ngayDen: string;
 ngayRoi: string
}
const initialState: RoomDetailState = {
  objectRoomDetail: {
    id: 0,
    tenPhong: "",
    khach: 0,
    phongNgu: 0,
    giuong: 0,
    phongTam: 0,
    moTa: "",
    giaTien: 0,
    mayGiat: true,
    banLa: true,
    tivi: true,
    dieuHoa: true,
    wifi: true,
    bep: true,
    doXe: true,
    hoBoi: true,
    banUi: true,
    maViTri: 0,
    hinhAnh: "",
  },
  arrBookedRoom: [],
  numberStayDates: 0,
  arrComment: [],
  bookingRoom: {
    id: "",
    maPhong: "",
    ngayDen: "",
    ngayDi: "",
    soLuongKhach: "",
    maNguoiDung: "",
  },
  ngayDen: "",
  ngayRoi: ""
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
    setNumberStayDate: (state, action: PayloadAction<number>) => {
      state.numberStayDates = action.payload;
    },
    getCommentAction: (
      state: RoomDetailState,
      action: PayloadAction<arrCommentModel[]>
    ) => {
      state.arrComment = action.payload;
    },
    setBookingAction: (state, action: PayloadAction<BookingRoomModel>) => {
      state.bookingRoom = action.payload;
    },
    setNgayDenAction: (state, action: PayloadAction<string>) => {
      state.ngayDen = action.payload;
    },
    setNgayRoiAction: (state, action: PayloadAction<string>) => {
      state.ngayRoi = action.payload;
    },
  },
});

export const {
  getRoomDetailAction,
  getBookedRoomAction,
  setNumberStayDate,
  getCommentAction,
  setBookingAction,
  setNgayRoiAction,
  setNgayDenAction

  
} = roomDetailReducer.actions;

export default roomDetailReducer.reducer;

// call API

export const getRoomDetailApi = (id: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    if (id !== undefined) {
      try {
        let result = await http.get(`/phong-thue/${id}`);
        dispatch(getRoomDetailAction(result.data.content));
      } catch (err) {
        console.log("getRoomDetailApiErr", err);
      }
    }
    return null;
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

export const getCommentApi = (maPhong: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/binh-luan/lay-binh-luan-theo-phong/${maPhong}`
      );
      dispatch(getCommentAction(result.data.content));
    } catch (err) {
      console.log("getCommentApiErr", err);
    }
  };
};

export const bookRoomApi = (duLieu: BookingRoomModel) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/dat-phong", duLieu);
      console.log(result);
      dispatch(setBookingAction(result.data.content));
    } catch (err) {
      console.log("bookRoomApiErr", err);
    }
  };
};
