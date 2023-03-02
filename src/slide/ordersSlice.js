import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "./api";

const initialState = {
  list: [],
  status: null,
};

export const ordersFetch = createAsyncThunk("orders/ordersFetch", async () => {
  try {
    const res = await axios.get(`${url}/orders`, setHeaders());
    return res.data;
  } catch (err) {
    console.log(err);
  }
});
export const ordersEdit = createAsyncThunk(
  "orders/ordersEdit",
  async (values, { getState }) => {
    const state = getState();
    let currentOrder = state.orders.list.filter(
      (order) => order._id === values.id
    );
    const newOrder = {
      ...currentOrder[0],
      delivery_status: values.delivery_status,
    };
    try {
      const res = await axios.put(
        `${url}/orders/${values.id}`,
        newOrder,
        setHeaders()
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
export const ordersCreate = createAsyncThunk(
  "orders/ordersCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/orders`, values, setHeaders());
      return response.data;
    } catch (error) {
      console.log("Lỗi rồi:", error);
    }
  }
);

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [ordersFetch.pending]: (state) => {
      state.status = "pending";
    },
    [ordersFetch.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "success";
    },
    [ordersFetch.rejected]: (state) => {
      state.status = "rejected";
    },
    [ordersCreate.pending]: (state) => {
      state.status = "pending";
    },
    [ordersCreate.fulfilled]: (state, action) => {
      state.list.push(action.payload);
      state.status = "success";
    },
    [ordersCreate.rejected]: (state) => {
      state.status = "rejected";
    },
    [ordersEdit.pending]: (state) => {
      state.status = "pending";
    },
    [ordersEdit.fulfilled]: (state, action) => {
      const updatedOrders = state.list.map((order) =>
        order._id === action.payload._id ? action.payload : order
      );
      state.list = updatedOrders;
      state.status = "success";
    },
    [ordersEdit.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default ordersSlice.reducer;
