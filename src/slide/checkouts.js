import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

const initialState = {
  provinces: [],
};

export const provincesFetch = createAsyncThunk(
  "checkout/provincesFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/province`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const checkouts = createSlice({
  name: "checkout",
  initialState,
  reducers: {},
  extraReducers: {
    [provincesFetch.pending]: (state) => {
      state.status = "pending";
    },
    [provincesFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.provinces = action.payload;
    },
    [provincesFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default checkouts.reducer;
