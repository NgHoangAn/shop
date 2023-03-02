import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";
import jwtDecode from "jwt-decode";
import { toast } from "react-toastify";
const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  isAdmin: false,
  registerStatus: "",
  registerError: "",
  loginStatus: "",
  loginError: "",
  userLoaded: false,
};
export const loginUser = createAsyncThunk(
  //tên action
  "/auth/loginUser",
  // async()
  // values là data khi gọi action
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/users/login`, {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", token.data);
      return token.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          isAdmin: user.isAdmin,
          userLoaded: true,
        };
      } else {
        return {
          ...state,
          userLoaded: true,
        };
      }
    },
    logoutUser(state) {
      localStorage.removeItem("token");
      toast.warning("Đăng xuất thành công", {
        position: "top-right",
      });
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        isAdmin: false,
        registerStatus: "",
        registerError: "",
        loginStatus: "",
        loginError: "",
      };
    },
  },
  //code logic xu ly async action
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      // bat trang thai loading
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        return {
          ...state,
          token: action.payload,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          _id: user._id,
          loginStatus: "success",
        };
      } else {
        return state;
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return {
        ...state,
        loginStatus: "rejected",
        loginError: action.payload,
      };
    });
  },
});

export const { loadUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
