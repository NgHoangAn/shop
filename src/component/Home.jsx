import React from "react";
import product1 from "../assets/images/product/template1.png";
import product2 from "../assets/images/product/template2.png";
import product3 from "../assets/images/product/template3.png";

import { BsFillCartPlusFill } from "react-icons/bs";

import slide1 from "../assets/images/slide-1.jpg";
import slide2 from "../assets/images/slide-2.jpg";
import slide3 from "../assets/images/slide-3.jpg";

import "../scss/_home.scss";
import { useSelector } from "react-redux";
const Home = () => {
  const { items } = useSelector((state) => state.category);

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

      <section className="home-collection-1">
        <div>
          <h3>Săn Deal Hot</h3>
          <div className="collection-1-items">
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
          </div>
          <div className="btn-area">
            <button className="btn-watch-all">Xem Tất Cả</button>
          </div>
        </div>
      </section>
      <section className="home-collection-2">
        <div>
          <h3>Săn Deal Hot</h3>
          <div className="collection-1-items">
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
          </div>
        </div>
      </section>
      {/* <section className="collection-category">
        <div className="cate-area">
          <div className="cate-btn-area">
            <p>Nhóm sản phẩm</p>
            <button>Xem ngay</button>
          </div>
          <div className="cate-main">
            {items?.map((item) => (
              <a key={item._id} href="/">
                <img src={item.image.url} alt="" />
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section> */}
      <div className="category">
        <div className="container">
          <div className="category-item-container has-scrollbar">
            {items?.map((item) => (
              // <a key={item._id} href="/">
              //   <img src={item.image.url} alt="" />
              //   <p>{item.name}</p>
              // </a>
              <div className="category-item" key={item._id}>
                <div className="category-img-box">
                  <img src={item.image.url} alt="" width="30" />
                </div>
                <div className="category-content-box">
                  <div className="category-content-flex">
                    <h3 className="category-item-title">{item.name}</h3>
                    <p className="category-item-amount">(53)</p>
                  </div>
                  <a href="/" className="category-btn">
                    Show all
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="home-collection-3">
        <div>
          <div className="collection-3-title">
            <h3>Thương hiệu Bapi</h3>
            <button>Thương hiệu Bapi</button>
          </div>
          <div className="collection-1-items">
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
          </div>
        </div>
      </section>
      <section className="home-collection-4">
        <div className="left">
          <h3>Cung Chúc Tân Niên - Đón Sale Triền Miên</h3>
          <div className="area">
            <div className="item">
              <div className="img">
                <img src={product2} alt="" />
              </div>
              <div className="desc">
                <p>Gạo đệ nhất Lạc Việt ST25 túi 5kg</p>
                <p className="price">148.000đ</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={product2} alt="" />
              </div>
              <div className="desc">
                <p>Gạo đệ nhất Lạc Việt ST25 túi 5kg</p>
                <p className="price">148.000đ</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={product2} alt="" />
              </div>
              <div className="desc">
                <p>Gạo đệ nhất Lạc Việt ST25 túi 5kg</p>
                <p className="price">148.000đ</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={product2} alt="" />
              </div>
              <div className="desc">
                <p>Gạo đệ nhất Lạc Việt ST25 túi 5kg</p>
                <p className="price">148.000đ</p>
              </div>
            </div>
            <div className="item">
              <div className="img">
                <img src={product2} alt="" />
              </div>
              <div className="desc">
                <p>Gạo đệ nhất Lạc Việt ST25 túi 5kg</p>
                <p className="price">148.000đ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={product3} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
