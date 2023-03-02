import axios from "axios";
import { setHeaders, url } from "./api";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  list: [],
  status: null,
  deleteStatus: null,
};

export const usersFetch = createAsyncThunk("users/usersFetch", async () => {
  try {
    const response = await axios.get(`${url}/users`, setHeaders());
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [usersFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [usersFetch.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [usersFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default usersSlice.reducer;
