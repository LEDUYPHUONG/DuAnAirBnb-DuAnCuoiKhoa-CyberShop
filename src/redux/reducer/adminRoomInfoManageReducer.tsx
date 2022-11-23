import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface RoomInfoModel {
    id:       number;
    tenPhong: string;
    khach:    number;
    phongNgu: number;
    giuong:   number;
    phongTam: number;
    moTa:     string;
    giaTien:  number;
    mayGiat:  boolean;
    banLa:    boolean;
    tivi:     boolean;
    dieuHoa:  boolean;
    wifi:     boolean;
    bep:      boolean;
    doXe:     boolean;
    hoBoi:    boolean;
    banUi:    boolean;
    maViTri:  number;
    hinhAnh:  string;
}

export interface AdminRoomInfoModel {
    arrRoomInfoAdmin: RoomInfoModel[],
    numberPageRoomInfoAdmin: number,

}

const initialState: AdminRoomInfoModel = {
    arrRoomInfoAdmin: [],
    numberPageRoomInfoAdmin: 1,
}

const adminRoomInfoManageReducer = createSlice({
  name: 'adminRoomInfoManageReducer',
  initialState,
  reducers: {
    setArrRoomInfoAdminApi : (state: AdminRoomInfoModel, action: PayloadAction<RoomInfoModel[]>) => {
        state.arrRoomInfoAdmin = action.payload;
    },
    setNumberPageRoomInfoAdmin : (state:AdminRoomInfoModel, action: PayloadAction<number>) => {
    state.numberPageRoomInfoAdmin = action.payload;
    },
  }
});

export const {setArrRoomInfoAdminApi, setNumberPageRoomInfoAdmin} = adminRoomInfoManageReducer.actions

export default adminRoomInfoManageReducer.reducer

// action API (action thunk)

export const getRoomInfoAdminApi = (numberPageRoomInfoAdmin :number) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.get(`/phong-thue/phan-trang-tim-kiem?pageIndex=${numberPageRoomInfoAdmin}&pageSize=5`);
        console.log(response);
        
        dispatch(setArrRoomInfoAdminApi(response.data.content.data))
      } catch (error) {
        console.log(error);
      }
    };
};

export const postNewRoomAdminApi = (values :any) => {
  return async () => {
    try {
      const response = await http.post('/phong-thue', values);
      console.log(response);
      alert('Thêm phòng mới thành công!')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
};