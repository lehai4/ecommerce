import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./cartItemSlice";
import cartTotal from "./cartTotalSlice";
export default configureStore({
  reducer: {
    cart: cartItem,
    cartTotal: cartTotal,
  },
});
