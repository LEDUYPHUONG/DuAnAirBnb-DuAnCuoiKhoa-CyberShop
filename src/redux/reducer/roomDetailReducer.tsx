import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ACCESS_TOKEN, getStore, history, http } from "../../util/setting";
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
  id: number;
  maPhong: number;
  ngayDen: string;
  ngayDi: string;
  soLuongKhach: number;
  maNguoiDung: number;
}
export interface CommentModel {
  id: number;
  maPhong: number;
  maNguoiBinhLuan: number;
  ngayBinhLuan: string;
  noiDung: string;
  saoBinhLuan: number;
}
export interface ArrNgayOLaiModel {}
export interface RoomDetailState {
  objectRoomDetail: roomDetailModel;
  arrBookedRoom: bookedRoomModel[];
  arrComment: arrCommentModel[];
  arrNgayOLai: any;
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
  arrComment: [],
  arrNgayOLai: [],
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
    getCommentAction: (
      state: RoomDetailState,
      action: PayloadAction<arrCommentModel[]>
    ) => {
      state.arrComment = action.payload;
    },

    setArrNgayOLai: (state, action: PayloadAction<ArrNgayOLaiModel[]>) => {
      state.arrNgayOLai = action.payload;
    },
  },
});

export const { getRoomDetailAction, getBookedRoomAction, getCommentAction, setArrNgayOLai } =
  roomDetailReducer.actions;

export default roomDetailReducer.reducer;

// call API

export const getRoomDetailApi = (id: number | undefined) => {
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

export const getCommentApi = (maPhong: number | string | undefined) => {
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
      alert("Đã đăng ký phòng thành công ^^");
    } catch (err) {
      console.log("bookRoomApiErr", err);
      if (!getStore(ACCESS_TOKEN)) {
        alert("Bạn cần đăng nhập mới có thể đặt được phòng");
        history.push("/signin");
        window.location.reload();
      } else {
        alert("Đăng ký phòng không thành công!");
      }
    }
  };
};
export const postCommentApi = (duLieuComment: CommentModel) => {
  //ở đây mình đã set type cho comment chứ ko cần phải tạo file model js như signin và booking nữa. Xem lại phần này nhé!
  return async (dispatch: AppDispatch) => {
    try {
      let result = await http.post("/binh-luan", duLieuComment);
      console.log(result);
      alert("Đánh giá của bạn đã được ghi nhận. Cảm ơn bạn rất nhiều!");
      window.location.reload();
    } catch (err) {
      console.log("CommentErrors", err);
    }
  };
};
