import { createSlice } from "@reduxjs/toolkit";
import { State } from "../Store";

import { GetChannelsModel } from "../../Models/GetChannelsModel";
import { GetChannelsAction } from "./GetChannels.actions";

const initialState: GetChannelsModel = {
  loading: false,
  error: null,
  data: null
}

export const GetChannelsSlice = createSlice({
  name: "GetChannels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetChannelsAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetChannelsAction.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(GetChannelsAction.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload as string;
      });
  },
});

export default GetChannelsSlice.reducer;

export const GetChannelsSelector = (state: State) => state.GetChannels;
