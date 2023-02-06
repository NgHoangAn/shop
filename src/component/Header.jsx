import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { logoutUser } from "../slide/authSlice";
import "../scss/_header.scss";
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <h2>
            <Link to="/">
              <ul>
                <li>
                  <div className="logo-holder logo-4">
                    <h3>Lorem</h3>
                    <p>ipsum dolor sit</p>
                  </div>
                </li>
              </ul>
            </Link>
          </h2>
        </div>

        <div className="search">
          <input type="text" className="searchText" />
          <BiSearch className="searchBtn" />
        </div>

        <div className="user-action">
          {auth._id ? (
            <>
              <div className="btn cart">
                <Link to="#">
                  <div className="nav-bag">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-basket3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                      </svg>
                      <span className="bag-quantity">
                        <span>{cartTotalQuantity}</span>
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              {auth.isAdmin ? (
                <div className="btn">
                  <Link to="/admin">
                    <p>Admin</p>
                  </Link>
                </div>
              ) : null}
              <div className="btn">
                <div onClick={() => dispatch(logoutUser())}>
                  <p>Logout</p>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="btn cart">
                <Link to="#">
                  <div className="nav-bag">
                    <p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-basket3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z" />
                      </svg>
                      <span className="bag-quantity">
                        <span>1</span>
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
              <div className="btn">
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </div>
              <div className="btn">
                <Link to="/register">
                  <p>Register</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      <nav className="header-main">
        <div className="container">
          <ul className="menu-category-list">
            <li className="menu-category">
              <a href="/" className="menu-title">
                Home
              </a>
            </li>
            <li className="menu-category">
              <a href="/" className="menu-title">
                Product
              </a>
              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="/">Shirt</a>
                  <a href="/">Shorts & Jeans</a>
                  <a href="/">Safety Shoes</a>
                  <a href="/">Wallet</a>
                </li>
              </ul>
            </li>
            <li className="menu-category">
              <a href="/" className="menu-title">
                Home
              </a>
            </li>
            <li className="menu-category">
              <a href="/" className="menu-title">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
