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
  currentPage: 1,
  productsPerPage: 10,
  totalProducts: 0,
  selectedCategory: "",
  filteredProducts: [],
  productPagina: [],
  totalPage: 1,
  brand: [],
  selectBrand: "",
  filterPrice: [],
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
export const productsEdit = createAsyncThunk(
  "products/productsEdit",
  async (values) => {
    try {
      const response = await axios.put(
        `${url}/products/${values.product._id}`,
        values,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
export const productsDelete = createAsyncThunk(
  "products/productsDelete",
  async (id) => {
    try {
      const response = await axios.delete(
        `${url}/products/${id}`,
        setHeaders()
      );
      return response.data;
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data);
    }
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },

    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    selectBrand(state, action) {
      state.selectBrand = action.payload;
    },
    selectPrice(state, action) {
      if (!state.filterPrice.includes(action.payload))
        state.filterPrice.push(action.payload);
    },
    applyFilter(state, action) {
      const { items, selectedCategory, selectBrand } = state;
      if (selectBrand) {
        state.filteredProducts = items.filter(
          (product) =>
            product.categoryId === selectedCategory &&
            product.brand === selectBrand
        );
      } else {
        state.filteredProducts = items.filter(
          (product) => product.categoryId === selectedCategory
        );
      }
    },
    clearFilter(state) {
      state.selectedCategory = "";
      state.filteredProducts = [];
    },
    setBrand(state, action) {
      const { items, filteredProducts } = state;
      if (state.brand.length > 0) {
        state.brand = [];
      }
      if (filteredProducts) {
        filteredProducts.map((product) => {
          if (!state.brand.includes(product.brand))
            state.brand.push(product.brand);
          return state;
        });
      } else {
        items.map((product) => {
          if (!state.brand.includes(product.brand))
            state.brand.push(product.brand);
          return state;
        });
      }
    },
  },
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
    [productsEdit.pending]: (state, action) => {
      state.editStatus = "pending";
    },
    [productsEdit.fulfilled]: (state, action) => {
      const updatedProduct = state.items.map((product) =>
        product._id === action.payload._id ? action.payload : product
      );
      state.items = updatedProduct;
      state.editStatus = "success";
      toast.success("Product Edited");
    },
    [productsEdit.rejected]: (state, action) => {
      state.editStatus = "rejected";
    },
    [productsDelete.pending]: (state, action) => {
      state.deleteStatus = "pending";
    },
    [productsDelete.fulfilled]: (state, action) => {
      const newList = state.items.filter(
        (item) => item._id !== action.payload._id
      );
      state.items = newList;
      state.deleteStatus = "success";
      toast.error("Product Deleted");
    },
    [productsDelete.rejected]: (state, action) => {
      state.deleteStatus = "rejected";
    },
  },
});

export const {
  changePage,
  setCurrentPage,
  setProductsPerPage,
  setTotalProducts,
  selectCategory,
  applyFilter,
  clearFilter,
  setBrand,
  selectBrand,
  selectPrice,
} = productSlice.actions;

export default productSlice.reducer;
