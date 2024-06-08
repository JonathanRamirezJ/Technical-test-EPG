import { createSlice } from "@reduxjs/toolkit";
import theme from "../../Contexts/ThemeProvider";

const initialState = theme;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
});

export default themeSlice.reducer;
