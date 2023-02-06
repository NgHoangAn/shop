import React from "react";
import product1 from "../assets/images/product/1.jpg";
import { BsFillCartPlusFill } from "react-icons/bs";

import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";
import icon from "../assets/images/icon/vegetable.png";
import "../scss/_home.scss";
const Home = () => {
  return (
    <>
      <div className="banner">
        <div className="slider-container has-scrollbar">
          <div className="slider-item">
            <img src={slide1} alt="" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Organic & Healthy</p>

              <h2 className="banner-title">FRESH VEGETABLES</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="/" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img src={slide2} alt="" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Organic & Healthy</p>

              <h2 className="banner-title">FRESH VEGETABLES</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="/" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
          <div className="slider-item">
            <img src={slide3} alt="" className="banner-img" />
            <div className="banner-content">
              <p className="banner-subtitle">Organic & Healthy</p>

              <h2 className="banner-title">FRESH VEGETABLES</h2>

              <p className="banner-text">
                starting at &dollar; <b>20</b>.00
              </p>

              <a href="/" className="banner-btn">
                Shop now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            <div className="category-item">
              <div className="category-img-box">
                <img src={icon} alt="" width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Item title</h3>
                  <p className="category-item-amount">(53)</p>
                </div>
                <a href="/" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="category-img-box">
                <img src={icon} alt="" width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Item title</h3>
                  <p className="category-item-amount">(53)</p>
                </div>
                <a href="/" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="category-img-box">
                <img src={icon} alt="" width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Item title</h3>
                  <p className="category-item-amount">(53)</p>
                </div>
                <a href="/" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
            <div className="category-item">
              <div className="category-img-box">
                <img src={icon} alt="" width="30" />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Item title</h3>
                  <p className="category-item-amount">(53)</p>
                </div>
                <a href="/" className="category-btn">
                  Show all
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="home-collection-1">
        <div className="">
          <h3>Món ngon ngày tết</h3>
          <div className="collection-1-items has-scrollbar">
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p className="desc-brand">Fresh Market</p>
                <h5 className="desc-name">Mâm đa phúc</h5>
                <p className="desc-price">1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p className="add-to-cart">
                    Thêm vào giỏ
                    <span className="add-to-cart-icon">
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="btn-area">
            <button className="btn-watch-all">Xem Tất Cả</button>
          </div>
        </div>
      </section>
      <section className="home-collection-2">
        <div className="">
          <h3>Món ngon ngày tết</h3>
          <div className="collection-1-items has-scrollbar">
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
            <div className="collection-1-item">
              <div className="cart">
                <img src={product1} alt="" width="100%" />
              </div>
              <div className="cart-desc">
                <p>Fresh Market</p>
                <h5>Mâm đa phúc</h5>
                <p>1,845,000đ</p>
              </div>
              <div className="cart-btn">
                <button>
                  <p>
                    Thêm vào giỏ
                    <span>
                      <BsFillCartPlusFill />
                    </span>
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
