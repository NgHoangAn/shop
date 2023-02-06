import React from "react";
import { Outlet } from "react-router-dom";

const Users = () => {
  return (
    <>
      <p>Users</p>
      <Outlet />
    </>
  );
};

export default Users;
