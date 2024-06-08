import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { defaultErrorMessage } from "../../Constants/Requests";

// Own services Api
import { BaseConfigApi } from "../../Services/API/BaseConfigApi";
import { GET_CHANNELS } from "../../Constants/GetChannels";

export const GetChannelsAction = createAsyncThunk(
  GET_CHANNELS,
  async (payload:string, thunkAPI) => {
    try {
      const response = await BaseConfigApi.get(`/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=${payload}`);
      return response.data.response;
    } catch(error) {
      if (error instanceof AxiosError) {
        return thunkAPI.rejectWithValue(error.response?.data.message);
      }

      return thunkAPI.rejectWithValue(defaultErrorMessage);
    }
  }
);
