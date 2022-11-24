import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { history, http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface RoomBookedModel {
    id: number;
    maPhong: number;
    ngayDen: string;
    ngayDi: string;
    soLuongKhach: number;
    maNguoiDung: number;
}
export interface NgayOLaiModel {
  0: string,
  1: string,
}
export interface AdminRoomBookedModel {
    arrRoomBookedAdmin: RoomBookedModel[],
    numberPageRoomBookedAdmin: number,
    arrNgayOLaiAdmin: NgayOLaiModel,
}
export interface ArrNgayOLaiAdminModel {}
const initialState: AdminRoomBookedModel = {
    arrRoomBookedAdmin: [],
    numberPageRoomBookedAdmin: 1,
    arrNgayOLaiAdmin: {
      0: '',
      1: '',
    },
}

const adminReservationManageReducer = createSlice({
  name: 'adminReservationManageReducer',
  initialState,
  reducers: {
    setArrRoomBookedAdminApi : (state: AdminRoomBookedModel, action: PayloadAction<RoomBookedModel[]>) => {
        state.arrRoomBookedAdmin = action.payload;
    },
    setNumberPageRoomBookedAdmin : (state:AdminRoomBookedModel, action: PayloadAction<number>) => {
    state.numberPageRoomBookedAdmin = action.payload;
    },
    setArrNgayOLaiAdmin: (state, action: PayloadAction<NgayOLaiModel>) => {
      state.arrNgayOLaiAdmin = action.payload;
    },
  }
});

export const {setArrRoomBookedAdminApi, setNumberPageRoomBookedAdmin, setArrNgayOLaiAdmin} = adminReservationManageReducer.actions

export default adminReservationManageReducer.reducer

// action API (action thunk)

export const getRoomBookedAdminApi = () => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.get('/dat-phong');       
        dispatch(setArrRoomBookedAdminApi(response.data.content))
      } catch (error) {
        console.log(error);
      }
    };
};

export const putEditRoomBookedAdminApi = (id: number,values :any) => {
  return async () => {
    try {
      const response = await http.put(`/dat-phong/${id}`, values);
      alert('Sửa thông tin đặt phòng thành công!')
      history.push('/admin/reservationmanage')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteRoomBookedAdminApi = (id: number) => {
  return async () => {
    try {
      const response = await http.delete(`/dat-phong/${id}`);
      alert('Delete Thành công!')
      history.push('/admin/reservationmanage')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
};