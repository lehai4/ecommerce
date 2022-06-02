import { createSlice } from "@reduxjs/toolkit";

export const CartItemSlicer = createSlice({
  name: "cart",
  initialState: {
    numberCart: 0,
    carts: [],
    _products: [],
  },
  reducers: {
    addCart: (state, action) => {
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: 1,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item, key) => {
          if (item.id === action.payload.id) {
            state.carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: 1,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      state.numberCart++;
    },
    updateCart: (state, action) => {},
    deleteCart: (state, action) => {
      state.numberCart--;
      let result = state.carts.filter((item) => item.id !== action.payload.id);
      const newCart = [...result];
      state.carts = newCart;
    },
    decreaseQuantity: (state, action) => {},
    increaseQuantity: (state, action) => {
      console.log(action.payload);
      // state.numberCart++;
    },
  },
});
export const {
  addCart,
  updateCart,
  deleteCart,
  decreaseQuantity,
  increaseQuantity,
} = CartItemSlicer.actions;
export default CartItemSlicer.reducer;
