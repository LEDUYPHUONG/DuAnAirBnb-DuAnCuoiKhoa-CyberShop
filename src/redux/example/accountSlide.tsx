import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AccountInfo } from "../../data/models/auth.model";
import { RootState } from "../configStore";

export interface UserState {
  value: AccountInfo | null;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  value: null,
  status: "idle"
};

export const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveAccount: (state, action: PayloadAction<AccountInfo>) => {
      state.value = action.payload;
    }
  }
});

export const { saveAccount } = accountSlice.actions;
export default accountSlice.reducer;
