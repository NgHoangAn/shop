import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaStore, FaTachometerAlt, FaClipboard } from "react-icons/fa";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  if (!auth.isAdmin) {
    return <p>Trang không khả dụng</p>;
  }
  return (
    <div className="admin-dashboard">
      <div className="admin-sidebar">
        <h3>Quick Links</h3>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/summary"
        >
          <FaTachometerAlt /> Summary
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/products"
        >
          <FaStore /> Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/category"
        >
          <FaStore /> Category
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/orders"
        >
          <FaClipboard /> Orders
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/admin/users"
        >
          <FaUser /> Users
        </NavLink>
      </div>
      <div className="admin-content">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
