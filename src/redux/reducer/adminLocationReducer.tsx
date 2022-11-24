import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { history, http } from "../../util/setting";
import { AppDispatch } from "../configStore";


export interface LocationModel {
    id:        number;
    tenViTri:  string;
    tinhThanh: string;
    quocGia:   string;
    hinhAnh:   string;
}
export interface AdminLocationModel {
    arrLocationAdmin: LocationModel[],
    numberPageAdmin: number,

}

const initialState: AdminLocationModel = {
    arrLocationAdmin: [],
    numberPageAdmin: 1
}

const adminLocationReducer = createSlice({
    name: 'adminLocationReducer',
    initialState,
    reducers: {
        setArrLocationAdminApi : (state: AdminLocationModel, action: PayloadAction<LocationModel[]>) => {
          state.arrLocationAdmin = action.payload;
        },
        setNumberPageAdmin : (state:AdminLocationModel, action: PayloadAction<number>) => {
        state.numberPageAdmin = action.payload;
        },
    }
});

export const { setArrLocationAdminApi, setNumberPageAdmin  } = adminLocationReducer.actions

export default adminLocationReducer.reducer

// action API (action thunk)

export const getLocationAdminApi = (numberPageAdmin :number) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.get(`/vi-tri/phan-trang-tim-kiem?pageIndex=${numberPageAdmin}&pageSize=5`);
        // console.log(response);
        
        dispatch(setArrLocationAdminApi(response.data.content.data))
      } catch (error) {
        console.log(error);
      }
    };
};

export const postLocationAdminApi = (form :LocationModel) => {
  return async () => {
    try {
      const response = await http.post('/vi-tri', form);
      console.log(response);
      alert('Tạo vị trí mới thành công!')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
};

export const putLocationAdminApi = (id :number,form :LocationModel) => {
  return async () => {
    try {
      const response = await http.put(`/vi-tri/${id}`, form);
      console.log(response);
      alert('Sửa vị trí thành công!')
      history.push('/admin/locationinfomanage')
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };
};