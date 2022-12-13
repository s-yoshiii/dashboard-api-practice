import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import dataDaily from "./apiData.json";
const apiUrl = "https://api.covid19api.com/total/country";
type DATADAILY = typeof dataDaily;
type covidState = {
  daily: DATADAILY;
  country: string;
  status: "pending" | "success" | "error";
};
const initialState: covidState = {
  daily: dataDaily,
  country: "japan",
  status: "pending",
};

export const fetchAsyncGetDaily = createAsyncThunk(
  "covid/getDaily",
  async (country: string) => {
    const { data } = await axios.get<DATADAILY>(`${apiUrl}/${country}`);
    return { data: data, country: country };
  }
);

const graphSlice = createSlice({
  name: "graph",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncGetDaily.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchAsyncGetDaily.fulfilled, (state, action) => {
        return {
          status: "success",
          daily: action.payload.data,
          country: action.payload.country,
        };
      })
      .addCase(fetchAsyncGetDaily.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export const selectDaily = (state: RootState) => state.graph.daily;
export const selectCountry = (state: RootState) => state.graph.country;
export const getStatus = (state: RootState) => state.graph.status;
export default graphSlice.reducer;
