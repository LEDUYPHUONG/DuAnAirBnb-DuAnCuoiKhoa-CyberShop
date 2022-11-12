import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface AdmintUserModel {
    id: number,
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    avatar: string,
    gender: boolean,
    role: string
}
export interface AdminUserState {
    arrAdminUser:AdmintUserModel[],
    numberPage: number
}
const initialState:AdminUserState = {
    arrAdminUser: [],
    numberPage: 1
}

const adminReducer = createSlice({
  name: 'adminReducer',
  initialState,
  reducers: {
    setArrAdminUserApi : (state:AdminUserState, action: PayloadAction<AdmintUserModel[]>) => {
        state.arrAdminUser = action.payload;
    },
    setNumberPage : (state:AdminUserState, action: PayloadAction<number>) => {
        state.numberPage = action.payload;
    },
  }
});

export const {
    setArrAdminUserApi, 
    setNumberPage
} = adminReducer.actions

export default adminReducer.reducer

export const getArrAdminUserApi = (numberPage:number) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.get(`/users/phan-trang-tim-kiem?pageIndex=${numberPage}&pageSize=5`);
        console.log(response.data.content.data);
        
        dispatch(setArrAdminUserApi(response.data.content.data))
      } catch (error) {
        console.log(error);
      }
    };
  };