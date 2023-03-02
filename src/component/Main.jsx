import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import Dashboard from "./admin/Dashboard";
import ProductsList from "./admin/list/ProductsList";

import Orders from "./admin/Orders";
import Productsadmin from "./admin/Products";
import Summary from "./admin/Summary";
import Users from "./admin/Users";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./Home";
import "../scss/_main.scss";
import CreateProduct from "./admin/CreateProduct";
import Product from "./Details/Product";
import Cart from "./Cart";
import CheckoutSuccess from "./CheckOutSuccess";
import OrdersList from "./admin/list/OrdersList";
import Order from "./Details/Order";
import { UsersList } from "./admin/list/Users";
import Products from "./Products";
import Category from "./admin/Category";
import CategoryList from "./admin/list/CategoryList";
import CreateCategory from "./admin/CreateCategory";
import Checkouts from "./Checkouts";
const Main = () => {
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (auth.loginStatus === "success") {
      toast.success(`Xin chào ${auth.name}`, {
        position: "top-right",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.loginStatus]);
  return (
    <div className="main container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="order/:id" element={<Order />} />
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/checkouts" element={<Checkouts />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="summary" element={<Summary />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UsersList />} />
          </Route>
          <Route path="orders" element={<Orders />}>
            <Route index element={<OrdersList />} />
          </Route>
          <Route path="category" element={<Category />}>
            <Route index element={<CategoryList />} />
            <Route path="create-category" element={<CreateCategory />} />
          </Route>
          <Route path="products" element={<Productsadmin />}>
            <Route index element={<ProductsList />} />
            <Route path="create-product" element={<CreateProduct />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Main;
