import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineBars } from "react-icons/ai";
import { logoutUser } from "../slide/authSlice";
import "../scss/_header.scss";
const Header = () => {
  const auth = useSelector((state) => state.auth);
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const { items } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  // function toggleNav() {
  //   let nav = document.querySelector(".modal");
  //   let menu = document.querySelector(".modal-menu");
  //   if (nav.className === "modal") {
  //     nav.className += " open";
  //     menu.className += " open";
  //   } else {
  //     nav.className = "modal";
  //     menu.className = "modal-menu";
  //   }
  // }
  // const closeModal = () => {
  //   let nav = document.querySelector(".modal");
  //   let menu = document.querySelector(".modal-menu");
  //   if (nav.className === "modal") {
  //     nav.className += " close";
  //     menu.className += " close";
  //   } else {
  //     nav.className = "modal";
  //     menu.className = "modal-menu";
  //   }
  // };
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="menu-mobile">
            <label htmlFor="nav-mobile-input" className="icon">
              <AiOutlineBars />
            </label>
          </div>
          <input
            type="checkbox"
            hidden
            className="nav-input"
            id="nav-mobile-input"
          />
          <label htmlFor="nav-mobile-input" className="overlay"></label>
          <div className="modal-menu">
            <ul className="mobile-menu">
              <li className="mobile-category">
                <a href="/" className="mobile-menu-title">
                  Trang chủ
                </a>
              </li>
              <li className="mobile-category">
                <a href="/products" className="mobile-menu-title">
                  Sản phẩm
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    {items?.map((item) => (
                      <a key={item._id} href="/">
                        {item.name}
                      </a>
                    ))}
                  </li>
                </ul>
              </li>
              <li className="mobile-category">
                <a href="/" className="mobile-menu-title">
                  Giới thiệu
                </a>
              </li>
              <li className="mobile-category">
                <a href="/" className="mobile-menu-title">
                  Liên hệ cửa hàng
                </a>
              </li>
            </ul>
            <div className="search-mobile">
              <div className="search">
                <input type="text" className="searchText" />
                <BiSearch className="searchBtn" />
              </div>
            </div>
          </div>

          <div className="logo">
            <h2>
              <Link to="/">
                <ul>
                  <li>
                    <div className="logo-holder logo-4">
                      <h3>Fresh</h3>
                      <p>market online fast</p>
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
                  <Link to="/cart">
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
                <div className="btn checkauth">
                  <div onClick={() => dispatch(logoutUser())}>
                    <p>Logout</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="btn cart">
                  <Link to="/cart">
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
                <div className="btn checkauth">
                  <Link to="/login">
                    <p>Login</p>
                  </Link>
                </div>
                <div className="btn checkauth">
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
                  Trang chủ
                </a>
              </li>
              <li className="menu-category">
                <a href="/products" className="menu-title">
                  Sản phẩm
                </a>
                <ul className="dropdown-list">
                  <li className="dropdown-item">
                    {items?.map((item) => (
                      <a key={item._id} href="/">
                        {item.name}
                      </a>
                    ))}
                  </li>
                </ul>
              </li>
              <li className="menu-category">
                <a href="/" className="menu-title">
                  Giới thiệu
                </a>
              </li>
              <li className="menu-category">
                <a href="/" className="menu-title">
                  Liên hệ cửa hàng
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
