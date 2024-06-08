import { createSlice } from "@reduxjs/toolkit";
import { State } from "../Store";

const initialState = {
  language: "es",
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export const selectorLanguage = (state: State) => state.language;

export default languageSlice.reducer;
