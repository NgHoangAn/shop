import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "",
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    applyFilter(state, action) {
      const { items } = state.products;
      const { selectedCategory } = state;
      state.filteredProducts = items.filter(
        (product) => product.categoryId === selectedCategory
      );
    },
    clearFilter(state) {
      state.selectedCategory = "";
      state.filteredProducts = [];
    },
  },
});

export const { selectCategory, applyFilter, clearFilter } = filterSlice.actions;

export default filterSlice.reducer;
