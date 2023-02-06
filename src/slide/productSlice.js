import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "./api";
import { toast } from "react-toastify";
const initialState = {
  items: [],
  status: null,
  error: null,
  createStatus: null,
  deleteStatus: null,
  editStatus: null,
};
export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/products`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const productCreate = createAsyncThunk(
  "products/productCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/products`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log("Lỗi rồi:", error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productCreate.pending]: (state) => {
      state.createStatus = "pending";
    },
    [productCreate.fulfilled]: (state, action) => {
      state.createStatus = "success";
      state.items.push(action.payload);
      toast.success("Nhập hàng thành công");
    },
    [productCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
      state.error = action.payload;
    },
    [productsFetch.pending]: (state) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default productSlice.reducer;
