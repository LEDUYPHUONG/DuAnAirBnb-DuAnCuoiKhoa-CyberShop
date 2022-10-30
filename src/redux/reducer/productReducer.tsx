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
    arrLocation: ProductModel[],
    arrProduct: ProductModel[]
}

const initialState: ProductState = {
    arrLocation: [],
    arrProduct: [
      {
        id:        0,
        tenViTri:  '',
        tinhThanh: '',
        quocGia:   '',
        hinhAnh:   ''
      }
    ]
}

const productReducer = createSlice({
  name: 'productReducer',
  initialState,
  reducers: {
    setArrLocationApi : (state:ProductState, action: PayloadAction<ProductModel[]>) => {
        state.arrLocation = action.payload;
      },
    setArrProductApi : (state:ProductState, action: PayloadAction<ProductModel[]>) => {
      state.arrProduct = action.payload;
      }
  }
});

export const { setArrLocationApi, setArrProductApi } = productReducer.actions

export default productReducer.reducer

// action API (action thunk)
export const getLocationApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get('/vi-tri');
      dispatch(setArrLocationApi(response.data.content))
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProductApi = (keywordRedux: string ) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get('/vi-tri/phan-trang-tim-kiem?' + `${keywordRedux}`);      
      dispatch(setArrProductApi(response.data.content.data))
    } catch (error) {
      console.log(error);
    }
  };
};
