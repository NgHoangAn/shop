import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";

import usersSlide from "./slide/usersSlide";
import authSlice, { loadUser } from "./slide/authSlice";
import productSlice, { productsFetch, setBrand } from "./slide/productSlice";
import cartSlice, { getTotals } from "./slide/cartSlice";
import ordersSlice from "./slide/ordersSlice";
import categorySlice, { categoryFetch } from "./slide/categorySlice";
import checkouts, { provincesFetch } from "./slide/checkouts";
import filterProduct from "./slide/filterProduct";

const store = configureStore({
  reducer: {
    users: usersSlide,
    auth: authSlice,
    products: productSlice,
    cart: cartSlice,
    orders: ordersSlice,
    category: categorySlice,
    checkout: checkouts,
    filter: filterProduct,
  },
});

store.dispatch(loadUser());
store.dispatch(productsFetch());
store.dispatch(categoryFetch());
store.dispatch(getTotals());
store.dispatch(provincesFetch());
store.dispatch(setBrand());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
