import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useNavigate } from "react-router-dom";
import "../scss/_cart.scss";
import axios from "axios";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { addToCart, decreaseCart, getTotals } from "../slide/cartSlice";
import { url } from "../slide/api";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  //const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDownQuantity = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleUpQuantity = (item) => {
    dispatch(addToCart(item));
  };
  const handleCheckOut = (cartItem) => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItem,
        userId: auth._id,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((er) => console.log(er.message));
  };
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <div className="cart-container">
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
      <div className="cart-main">
        <div className="left-cart">
          <h3>Giỏ hàng của bạn</h3>
          <p>Bạn đang có 3 sản phẩm trong giỏ hàng</p>
          <div className="cart-items">
            {cart.cartItem.length === 0 ? (
              <div>
                <p>NO product</p>
              </div>
            ) : (
              <>
                <p>sasdasd</p>
                {cart.cartItem?.map((item) => (
                  <div className="cart-item" key={item._id}>
                    <div className="cart-img">
                      <img src={item.image.url} alt="" />
                    </div>
                    <div className="item-desc">
                      <p className="desc-name">{item.name}</p>
                      <p className="desc-price">
                        {item.price?.toLocaleString()}đ
                      </p>
                    </div>
                    <div className="item-action">
                      <p>
                        {(item.price * item.cartQuantity).toLocaleString()}đ
                      </p>
                      <div>
                        <div className="actions">
                          <button>
                            <p onClick={() => handleDownQuantity(item)}>-</p>
                          </button>
                          <input type="text" value={item.cartQuantity} />
                          <button>
                            <p onClick={() => handleUpQuantity(item)}>+</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="cart-note">
            <p>Ghi chú giỏ hàng</p>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="check-order">
            <AiOutlineCheckCircle />
            <p>xuất hòa đơn cho đơn hàng</p>
          </div>
        </div>
        <div className="right-cart">
          <div className="info-desc">
            <h3>Thông tin đơn hàng</h3>
            <div className="price-area">
              <p>Tổng tiền:</p>
              <p>{cart.cartTotalAmount.toLocaleString()}đ</p>
            </div>
            <div className="text-area">
              <p>
                khách hàng lựa chọn và xác nhận giao hàng. Sau khi hoàn tất đơn
                hàng, nhân viên của Store sẽ liên hệ xác nhận đơn hàng.
              </p>
              <p>
                Khách hàng vui lòng đặt cọc tối thiểu 50% giá trị đơn hàng.
                Thông tin chuyển khoảng: Ngan hàng BIDV chi nhánh Gia Lâm, PGD
                Ocean Park. Số TK: 2345664542552 Chủ TK: Công ty Cố phần Đại
                Thanh Hải.
              </p>
            </div>
            <div className="button-area">
              <button onClick={() => handleCheckOut(cart.cartItem)}>
                Thanh toán
              </button>
            </div>
          </div>
          <div className="last-info">
            <h5>Chính sách mua hàng</h5>
            <p>
              Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá tị tối
              thiểu 150.000đ trở lên
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
