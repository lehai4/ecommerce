import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import cartItem from "./cartItemSlice";
import cartTotal from "./cartTotalSlice";

const composedEnhancers = composeWithDevTools();
export default configureStore(
  {
    reducer: {
      cart: cartItem,
      cartTotal: cartTotal,
    },
  },
  composedEnhancers
);
