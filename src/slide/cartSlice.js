import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity += action.payload.quantity;
        toast.success(`added ${action.payload.name} to cart`, {
          position: "top-right",
        });
      } else {
        const tempProduct = {
          ...action.payload,
          cartQuantity: action.payload.quantity,
        };
        state.cartItem.push(tempProduct);
        toast.success(`added ${action.payload.name} to cart`, {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));

      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cartItem[itemIndex].cartQuantity > 1) {
        state.cartItem[itemIndex].cartQuantity -= 1;
        toast.error(`Deceased ${action.payload.name} cart quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItem[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        state.cartItem = nextCartItems;
        toast.error(`Remove ${action.payload.name} cart quantity`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    clearCart(state) {
      state.cartItem = [];
      toast.error(`Cart Clear`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItem", JSON.stringify(state.cartItem));
    },
    getTotals(state) {
      let { total, quantity } = state.cartItem.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const { addToCart, decreaseCart, getTotals, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
