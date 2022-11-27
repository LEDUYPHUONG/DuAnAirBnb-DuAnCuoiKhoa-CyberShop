import { createSlice } from "@reduxjs/toolkit";

const initialState: string = "pageIndex=1&pageSize=20";

const keywordReducer = createSlice({
  name: "keywordReducer",
  initialState,
  reducers: {
    setKeyword: (state: string, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setKeyword } = keywordReducer.actions;

export default keywordReducer.reducer;
