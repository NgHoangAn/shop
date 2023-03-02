import React, { useEffect } from "react";
import "../scss/_products.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  applyFilter,
  selectBrand,
  selectCategory,
  setBrand,
} from "../slide/productSlice";
const Products = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.category);
  const products = useSelector((state) => state.products.items);
  const { filteredProducts, selectedCategory, brand } = useSelector(
    (state) => state.products
  );
  const handleFilterband = (e, name) => {
    e.preventDefault();
    dispatch(selectBrand(name));
    dispatch(applyFilter());
  };
  const handleFilterCate = (e, id) => {
    e.preventDefault();
    dispatch(selectCategory(id));
    dispatch(applyFilter());
    dispatch(setBrand());
  };
  useEffect(() => {
    dispatch(applyFilter());
    dispatch(setBrand());
  }, [dispatch]);
  return (
    <>
      <div className="products-container">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Sản phẩm</a>
          </li>
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
                    {items?.map((item) => (
                      <ul key={item._id}>
                        <li>
                          <a
                            href="/"
                            onClick={(e) => handleFilterCate(e, item._id)}
                          >
                            {item.name}
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
                {brand.length > 0 && (
                  <div className="tab">
                    <input type="checkbox" id="chck2" />
                    <label htmlFor="chck2" className="tab-label">
                      Thương hiệu
                    </label>
                    <div className="tab-content">
                      <ul>
                        {(() => {
                          const list = [];
                          for (let i = 0; i < brand.length; i++) {
                            list.push(
                              <li
                                key={i}
                                onClick={(e) => handleFilterband(e, brand[i])}
                              >
                                {brand[i]}
                              </li>
                            );
                          }
                          return list;
                        })()}
                      </ul>
                    </div>
                  </div>
                )}
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
                {selectedCategory ? (
                  <>
                    <p>{filteredProducts.length} sản phẩm</p>
                  </>
                ) : (
                  <>
                    <p>{products.length} sản phẩm</p>
                  </>
                )}
              </div>
              <select name="" id="">
                <option value="chose">Sắp xếp</option>
                <option value="chose">Sắp xếp</option>
                <option value="chose">Sắp xếp</option>
                <option value="chose">Sắp xếp</option>
              </select>
            </div>
            <div className="products">
              {selectedCategory ? (
                <>
                  {filteredProducts?.map((item) => (
                    <div className="product" key={item._id}>
                      <div className="product-img">
                        <a href={`product/${item._id}`}>
                          <img src={item.image.url} alt="" width="100%" />
                        </a>
                      </div>
                      <div className="product-desc">
                        <p>{item.brand}</p>
                        <p>{item.name}</p>
                        <p>{item.price.toLocaleString()}đ</p>
                      </div>
                      <div className="product-button"></div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {products?.map((item) => (
                    <div className="product" key={item._id}>
                      <div className="product-img">
                        <a href={`product/${item._id}`}>
                          <img src={item.image.url} alt="" width="100%" />
                        </a>
                      </div>
                      <div className="product-desc">
                        <p>{item.brand}</p>
                        <p>{item.name}</p>
                        <p>{item.price.toLocaleString()}đ</p>
                      </div>
                      <div className="product-button"></div>
                    </div>
                  ))}
                </>
              )}
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
