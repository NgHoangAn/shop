import React from "react";
import { Outlet } from "react-router-dom";

const Orders = () => {
  return (
    <>
      <p>Orders</p>
      <Outlet />
    </>
  );
};

export default Orders;
