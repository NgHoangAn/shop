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
export const categoryFetch = createAsyncThunk(
  "category/categoryFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/category`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const categoryCreate = createAsyncThunk(
  "category/categoryCreate",
  async (values) => {
    try {
      const response = await axios.post(
        `${url}/category`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log("Lỗi rồi:", error);
    }
  }
);
export const categoryDelete = createAsyncThunk(
  "category/categoryDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/category/${id}`,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [categoryFetch.pending]: (state) => {
      state.status = "pending";
    },
    [categoryFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [categoryFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [categoryCreate.pending]: (state) => {
      state.createStatus = "pending";
    },
    [categoryCreate.fulfilled]: (state, action) => {
      state.createStatus = "success";
      state.items.push(action.payload);
      toast.success("Nhập hàng thành công");
    },
    [categoryCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
      state.error = action.payload;
    },
    [categoryDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [categoryDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Category Deleted");
    },
    [categoryDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export default categorySlice.reducer;
