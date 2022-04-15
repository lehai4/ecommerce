import { createSlice } from "@reduxjs/toolkit";

export const CartItemSlicer = createSlice({
  name: "cart",
  initialState: {
    carts: [
      {
        title: "",
        description: "",
        price: "",
        image: "",
        quantity: 0,
      },
    ],
  },

  reducers: {
    addCart: (state, action) => {
      state.carts = [...state.carts, action.payload];
    },
    updateCart: (state, action) => {},
    deleteCart: (state, action) => {
      const newCarts = [...state.carts];
      newCarts.splice(action.payload, 1);
      return {
        ...state.carts,
        carts: newCarts,
      };
    },
  },
});
export const { addCart, updateCart, deleteCart } = CartItemSlicer.actions;
export default CartItemSlicer.reducer;
