import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setHeaders, url } from "../../slide/api";
import {
  FaBox,
  FaFacebookF,
  FaFacebookMessenger,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slide/cartSlice";
import { toast } from "react-toastify";
const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  //const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/products/find/${params.id}`,
          setHeaders()
        );
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleAddToCart = (product, quantity) => {
    const tempProduct = { ...product, quantity };
    dispatch(addToCart(tempProduct));
  };
  const handleDownQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      toast.warning("Số lượng không hợp lệ", {
        position: "top-right",
      });
    }
  };
  const handleUpQuantity = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className="product-container">
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
      <div className="main-product">
        {isLoading ? (
          <>
            <p>Loading....</p>
          </>
        ) : (
          <>
            <div className="img-container">
              <img src={product.image?.url} alt="product" />
              <div className="social-area">
                <p>Chia sẻ:</p>
                <div className="social-icon">
                  <a href="/" className="facebook-icon">
                    <FaFacebookF />
                  </a>
                  <a href="/" className="mess-icon">
                    <FaFacebookMessenger />
                  </a>
                  <a href="/" className="pin-icon">
                    <FaPinterestP />
                  </a>
                  <a href="/" className="twitter-icon">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="product-details">
              <div className="main-detail">
                <h3>{product.name}</h3>
                <div className="sub-title">
                  <p>
                    Mã sản phẩm:{" "}
                    <span>{product.code ? product.code : "NoCode"}</span>
                  </p>
                  <p>
                    Tình trạng: <span>Còn hàng</span>
                  </p>
                  <p>
                    Thương hiệu: <span>{product.brand}</span>
                  </p>
                </div>
                <div className="price">
                  <p>
                    Giá:<span>{product.price?.toLocaleString()} đ</span>
                  </p>
                </div>
                <div className="quantity">
                  <div className="quantity-title">Số lượng:</div>
                  <div className="actions">
                    <button>
                      <p onClick={() => handleDownQuantity()}>-</p>
                    </button>
                    <input type="text" value={quantity} />
                    <button>
                      <p onClick={() => handleUpQuantity()}>+</p>
                    </button>
                  </div>
                </div>
                <div className="add-to-cart-area">
                  <button
                    className="add-cart"
                    onClick={() => handleAddToCart(product, quantity)}
                  >
                    Thêm vào giỏ
                  </button>
                  <button className="buy-now">Mua ngay</button>
                </div>
                <div className="product-delivery">
                  <div className="sub-delivery">
                    <span>
                      <FaBox />
                    </span>
                    <p>Cam kết 100% chính hãng</p>
                  </div>
                  <div className="sub-delivery">
                    <span>
                      <CiDeliveryTruck />
                    </span>
                    <p>Hỗ tợ 24/7</p>
                  </div>
                  <div className="sub-delivery">
                    <span>
                      <BiLike />
                    </span>
                    <p>Mở hợp kiểm tra nhận hàng</p>
                  </div>
                </div>
              </div>
              <div className="sub-detail">
                <p>Giảm 10 % khi đặt trước 5 ngày</p>
              </div>
              <div className="desc-detail">
                <h4>Mô tả sản phẩm</h4>
                <p>{product.desc}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Product;
