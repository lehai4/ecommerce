import { createSlice } from "@reduxjs/toolkit";
const initValue = {
  numberCart: 0,
  carts: [],
  _products: [],
};
export const CartItemSlicer = createSlice({
  name: "cart",
  initialState: initValue,
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
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };
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
