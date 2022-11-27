import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
};

const loadingReducer = createSlice({
  name: "loadingReducer",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = loadingReducer.actions;

export default loadingReducer.reducer;
