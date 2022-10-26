import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/setting';
import { AppDispatch } from '../configStore';

export interface ProductModel {
    id:        number;
    tenViTri:  string;
    tinhThanh: string;
    quocGia:   string;
    hinhAnh:   string;
}

export interface ProductState {
    arrProduct: ProductModel[]
}

const initialState: ProductState = {
    arrProduct: []
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrProductApi : (state:ProductState, action: PayloadAction<ProductModel[]>) => {
        state.arrProduct = action.payload;
      }
  }
});

export const {setArrProductApi} = productReducer.actions

export default productReducer.reducer

// action API (action thunk)
export const getProductApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get('/vi-tri');
      dispatch(setArrProductApi(response.data.content))
    } catch (error) {
      console.log(error);
    }
  };
};