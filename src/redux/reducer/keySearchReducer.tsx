import { createSlice } from '@reduxjs/toolkit'

 
const initialState:string = ''

const keySearchReducer = createSlice({
  name: 'keySearchReducer',
  initialState,
  reducers: {
    setKeySearch : (state:string, action) => {
        state = action.payload;
        return state
      },
  }
});

export const {setKeySearch} = keySearchReducer.actions

export default keySearchReducer.reducer