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
      const newCarts = [...state.carts];
      newCarts.splice(action.payload, 1);
      return {
        ...state.carts,
        carts: newCarts,
      };
    },
    decreaseQuantity: (state, action) => {
      let quantity = state.carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.carts[action.payload].quantity--;
      }
      return {
        ...state,
      };
    },
    increaseQuantity: (state, action) => {
      state.numberCart++;
      state.carts[action.payload].quantity++;
      return {
        ...state,
      };
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
