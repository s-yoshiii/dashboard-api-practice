import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import dataDaily from "./data.json";
const apiUrl = "https://opendata.corona.go.jp/api/Covid19JapanAll";
type DATADAILY = typeof dataDaily;
type covid19JapanState = {
  daily: DATADAILY;
  pref: string;
};
const initialState: covid19JapanState = {
  daily: dataDaily,
  pref: "東京都",
};

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async (pref: string) => {
    const { data } = await axios.get<DATADAILY>(`${apiUrl}?dataName=${pref}`);
    return { data: data, pref: pref };
  }
);

const graphSlice = createSlice({
  name: "graph",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
      return {
        ...state,
        daily: action.payload.data,
        pref: action.payload.pref,
      };
    });
  },
});

export default graphSlice.reducer;
