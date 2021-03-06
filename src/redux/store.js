import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import cartItem from "./cartItemSlice";

const composedEnhancers = composeWithDevTools();
export default configureStore(
  {
    reducer: {
      cart: cartItem,
    },
  },
  composedEnhancers
);
