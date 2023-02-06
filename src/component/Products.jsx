import React from "react";
import "../scss/_products.scss";
import product1 from "../assets/images/product/1.jpg";
const Products = () => {
  return (
    <>
      <div className="products-container">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Pictures</a>
          </li>
          <li>
            <a href="/">Summer 15</a>
          </li>
          <li>Italy</li>
        </ul>
        <div className="products-main">
          <div className="products-sidebar">
            <div className="products-category">
              <div className="tabs">
                <div className="tab">
                  <input type="checkbox" id="chck1" />
                  <label htmlFor="chck1" className="tab-label">
                    Danh mục sản phẩm
                  </label>
                  <div className="tab-content">
                    <ul>
                      <li>
                        <a href="/">link</a>
                      </li>
                      <li>
                        <a href="/">link</a>
                      </li>
                      <li>
                        <a href="/">link</a>
                      </li>
                      <li>
                        <a href="/">link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck2" />
                  <label htmlFor="chck2" className="tab-label">
                    Thương hiệu
                  </label>
                  <div className="tab-content">
                    <ul>
                      <li>
                        <a href="/">link</a>
                      </li>
                      <li>
                        <a href="/">link</a>
                      </li>
                      <li>
                        <a href="/">link</a>
                      </li>
                      <li>
                        <a href="/">link</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab">
                  <input type="checkbox" id="chck3" />
                  <label htmlFor="chck3" className="tab-label">
                    Lọc theo giá
                  </label>
                  <div className="tab-content">
                    <ul>
                      <li className="li-area">
                        <input
                          className="li-input-area"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <a href="/">Dưới 20.000đ</a>
                      </li>
                      <li className="li-area">
                        <input
                          className="li-input-area"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <a href="/">20.000đ - 100.000đ</a>
                      </li>
                      <li className="li-area">
                        <input
                          className="li-input-area"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <a href="/">100.000đ - 300.000đ</a>
                      </li>
                      <li className="li-area">
                        <input
                          className="li-input-area"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <a href="/">300.000đ - 500.000đ</a>
                      </li>
                      <li className="li-area">
                        <input
                          className="li-input-area"
                          type="checkbox"
                          name=""
                          id=""
                        />
                        <a href="/">Trên 500.000đ</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="title-main">
              <div>
                <h3>Tất cả sản phẩm</h3>
                <p>400 sản phẩm</p>
              </div>
              <select name="" id="">
                <option value="chose">Sắp xếp</option>
                <option value="chose">Sắp xếp</option>
                <option value="chose">Sắp xếp</option>
                <option value="chose">Sắp xếp</option>
              </select>
            </div>
            <div className="products">
              <div className="product">
                <div className="product-img">
                  <img src={product1} alt="" width="100%" />
                </div>
                <div className="product-desc">
                  <p>brand</p>
                  <p>Socola ANNOM 46%</p>
                  <p>20.000đ</p>
                </div>
                <div className="product-button"></div>
              </div>
              <div className="product">
                <div className="product-img">
                  <img src={product1} alt="" width="100%" />
                </div>
                <div className="product-desc">
                  <p>brand</p>
                  <p>Socola ANNOM 46%</p>
                  <p>20.000đ</p>
                </div>
                <div className="product-button"></div>
              </div>
              <div className="product">
                <div className="product-img">
                  <img src={product1} alt="" width="100%" />
                </div>
                <div className="product-desc">
                  <p>brand</p>
                  <p>Socola ANNOM 46%</p>
                  <p>20.000đ</p>
                </div>
                <div className="product-button"></div>
              </div>
              <div className="product">
                <div className="product-img">
                  <img src={product1} alt="" width="100%" />
                </div>
                <div className="product-desc">
                  <p>brand</p>
                  <p>Socola ANNOM 46%</p>
                  <p>20.000đ</p>
                </div>
                <div className="product-button"></div>
              </div>
              <div className="product">
                <div className="product-img">
                  <img src={product1} alt="" width="100%" />
                </div>
                <div className="product-desc">
                  <p>brand</p>
                  <p>Socola ANNOM 46%</p>
                  <p>20.000đ</p>
                </div>
                <div className="product-button"></div>
              </div>
              <div className="product">
                <div className="product-img">
                  <img src={product1} alt="" width="100%" />
                </div>
                <div className="product-desc">
                  <p>brand</p>
                  <p>Socola ANNOM 46%</p>
                  <p>20.000đ</p>
                </div>
                <div className="product-button"></div>
              </div>
            </div>
            <div className="products-load-btn-area">
              <button>Xem thêm sản phẩm</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
