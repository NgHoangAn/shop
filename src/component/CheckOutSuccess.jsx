import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearCart, getTotals } from "../slide/cartSlice";

export default function CheckoutSuccess() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);
  return (
    <Container>
      <h2>Checkout Successful</h2>
      <p>Your order might take some time to process</p>
      <p>Check your status at your profile after about 10mins</p>
      <p>
        Incase of any inqueries contact the support at{" "}
        <strong>support@onlineshop.com</strong>
      </p>
    </Container>
  );
}

const Container = styled.div`
  min-height: 80vh;
  max-height: 800px;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    margin-bottom: 0.5rem;
    color: #029e02;
  }
`;
