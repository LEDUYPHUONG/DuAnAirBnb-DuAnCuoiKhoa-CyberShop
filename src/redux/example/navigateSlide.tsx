import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../configStore";

export interface NavigateState {
  valueLinkHeader: LinkHeader;
}

interface LinkHeader {
  fromLink: string;
  toLink: string;
}

const initialState: NavigateState = {
  valueLinkHeader: {
    fromLink: "",
    toLink: "",
  },
};

export const navigateLinkHeaderSlide = createSlice({
  name: "linkHeader",
  initialState,
  reducers: {
    saveNavigateLinkHeader: (state, action: PayloadAction<LinkHeader>) => {
      state.valueLinkHeader = action.payload;
    },
  },
});

export const { saveNavigateLinkHeader } = navigateLinkHeaderSlide.actions;

export default navigateLinkHeaderSlide.reducer;
