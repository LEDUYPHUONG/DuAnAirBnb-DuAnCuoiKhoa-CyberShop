import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history, http } from "../../util/setting";
import { AppDispatch } from "../configStore";

export interface RoomInfoModel {
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

export interface AdminRoomInfoModel {
  arrRoomInfoAdmin: RoomInfoModel[];
  numberPageRoomInfoAdmin: number;
}

const initialState: AdminRoomInfoModel = {
  arrRoomInfoAdmin: [],
  numberPageRoomInfoAdmin: 1,
};

const adminRoomInfoManageReducer = createSlice({
  name: "adminRoomInfoManageReducer",
  initialState,
  reducers: {
    setArrRoomInfoAdminApi: (
      state: AdminRoomInfoModel,
      action: PayloadAction<RoomInfoModel[]>
    ) => {
      state.arrRoomInfoAdmin = action.payload;
    },
    setNumberPageRoomInfoAdmin: (
      state: AdminRoomInfoModel,
      action: PayloadAction<number>
    ) => {
      state.numberPageRoomInfoAdmin = action.payload;
    },
  },
});

export const { setArrRoomInfoAdminApi, setNumberPageRoomInfoAdmin } =
  adminRoomInfoManageReducer.actions;

export default adminRoomInfoManageReducer.reducer;

// action API (action thunk)

export const getRoomInfoAdminApi = (numberPageRoomInfoAdmin: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(
        `/phong-thue/phan-trang-tim-kiem?pageIndex=${numberPageRoomInfoAdmin}&pageSize=5`
      );
      dispatch(setArrRoomInfoAdminApi(response.data.content.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postNewRoomAdminApi = (values: any) => {
  return async () => {
    try {
      const response = await http.post("/phong-thue", values);
      console.log(response);
      alert("Thêm phòng mới thành công!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const putEditRoomAdminApi = (id: number, values: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.put(`/phong-thue/${id}`, values);
      console.log(response);
      alert("Sửa thông tin phòng thành công!");
      history.push("/admin/roominfomanage");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRoomAdminApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.delete(`/phong-thue/${id}`);
      console.log("deleteRoomAdminApi", response.data.content);
      alert("Delete Thành công!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const postEditImageRoomAdminApi = (id: number, formFile: FormData) => {
  return async () => {
    try {
      const result = await http.post(
        `/phong-thue/upload-hinh-phong?maPhong=${id}`,
        formFile
      );
      console.log("Update thành công", result);
      alert("Update hình của phòng thành công");
      history.push("/admin/roominfomanage");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
};
