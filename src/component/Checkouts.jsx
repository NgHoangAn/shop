import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../scss/_checkouts.scss";
import { ordersCreate } from "../slide/ordersSlice";
const Checkouts = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState(auth.name);
  const [email, setEmail] = useState(auth.email);
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  const { cartItem, cartTotalQuantity, cartTotalAmount } = useSelector(
    (state) => state.cart
  );
  const { status } = useSelector((state) => state.orders);
  const random = () => {
    let ran = Math.floor(Math.random() * 100000);
    const ranF = `#FRESH${ran}`;
    return ranF;
  };
  const [order, setOrder] = useState({
    name: name,
    email: email,
    code: random(),
    phone: "",
    address: "",
    delivery: "",
    payment: "",
    cartItem: cartItem,
    cartTotalAmount: cartTotalAmount,
    cartTotalQuantity: cartTotalQuantity,
    auth: auth._id,
  });
  const handleSubmit = async () => {
    await dispatch(ordersCreate(order));
  };
  useEffect(() => {
    if (status === "success") {
      navigate("/checkout-success");
    } else if (status === "reject") {
      navigate("/cart");
    }
  }, [status, navigate]);
  return (
    <>
      <div className="checkout-area">
        <div className="left">
          <div className="title">
            <h3>Fresh Market</h3>
            <div className="direct">
              <p>Giỏ hàng</p>
              <p>Thông tin giao hàng</p>
              <p>Phương thức thanh toán</p>
            </div>
            <div>
              <p>Thông tin giao hàng</p>
              {auth._id ? (
                <>
                  <p>{auth.name}</p>
                </>
              ) : (
                <>
                  <p>Bạn đã có tài khoản? Đăng nhập</p>
                </>
              )}
            </div>
          </div>
          <div className="form-info">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Họ và tên"
            />
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="email"
                type="email"
                placeholder="Email"
              />
              <input
                className="phone"
                type="number"
                placeholder="Số điện thoại"
              />
            </div>
            <input type="text" placeholder="Địa chỉ" />
            <div className="delivery">
              <h4>Phương thức vận chuyển</h4>
              <div>
                <input
                  type="radio"
                  name="delivery"
                  onChange={(e) =>
                    setOrder({ ...order, delivery: "Giao hàng tận nơi" })
                  }
                />
                <label htmlFor="delivery">Giao hàng tận nơi</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="delivery"
                  onChange={(e) =>
                    setOrder({ ...order, delivery: "Giao hàng nội thành" })
                  }
                />
                <label htmlFor="delivery">Giao hàng nội thành</label>
              </div>
            </div>

            <div className="payment-select">
              <select
                name=""
                id=""
                onChange={(e) =>
                  setOrder({ ...order, payment: e.target.value })
                }
              >
                <option value="">Phương thức thanh toán</option>
                <option value="Thanh toán khi giao hàng (COD)">
                  Thanh toán khi giao hàng (COD)
                </option>
                <option value="Chuyển khoản qua ngân hàng">
                  Chuyển khoản qua ngân hàng
                </option>
              </select>
            </div>
            <div className="button-area">
              <button>Giỏ hàng</button>
              <button onClick={() => handleSubmit()}>
                Hoàn thành đơn hàng
              </button>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="product-area">
            {cartItem?.map((item) => (
              <div key={item._id}>
                <div className="img">
                  <img src={item.image.url} alt="" />
                </div>
                <div className="desc">
                  <p className="main-desc">{item.name}</p>
                  <p className="sub-desc">{item.name}</p>
                </div>
                <div className="price">
                  <p>{item.price.toLocaleString()}đ</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sum">
            <div>
              <p>tạm tính</p>
              <p>{cartTotalAmount.toLocaleString()} đ</p>
            </div>
            <div>
              <p>phí vận chuyển</p>
              <p>---</p>
            </div>
          </div>
          <div className="real-sum">
            <p className="real-sum-title">Tổng cộng</p>
            <p className="real-sum-price">
              <span>vnd</span> {cartTotalAmount.toLocaleString()}đ
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkouts;
