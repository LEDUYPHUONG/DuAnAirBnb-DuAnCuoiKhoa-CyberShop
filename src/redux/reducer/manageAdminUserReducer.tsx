import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface AdminInfoModel {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    gender: boolean,
    role: string
}
export interface AdminUserInfoState {
    AdminUserInfo:AdminInfoModel
}
const initialState: AdminUserInfoState = {
    AdminUserInfo: {
        id: 0,
        name: "",
        email: "",
        password: "",
        phone: "",
        birthday: "",
        gender: true,
        role: ""
    }
   
}

const manageAdminUserReducer = createSlice({
  name: 'manageAdminUserReducer',
  initialState,
  reducers: {
    setAdminUserInfoApi : (state:AdminUserInfoState, action: PayloadAction<AdminInfoModel>) => {
        state.AdminUserInfo = action.payload;
    },
 
  }
});

export const {
    setAdminUserInfoApi, 
    
} = manageAdminUserReducer.actions

export default manageAdminUserReducer.reducer

export const getAdminUserInfoApi = (value:any) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.post('/users',value);
        console.log(response);//.data.content.data
        alert('Thêm admin thành công');
        window.location.reload()
        // dispatch(setArrAdminUserApi(response.data.content.data))
      } catch (error) {
        console.log(error);
      }
    };
  };