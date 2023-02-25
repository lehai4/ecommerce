import { createSlice } from "@reduxjs/toolkit";

export const CartItemSlicer = createSlice({
  name: "cart",
  initialState: {
    numberCart: 0,
    carts: [],
  },
  reducers: {
    clearAllCart: (state) => {
      state.carts = [];
      state.numberCart = 0;
    },
    getNumberCart(state) {
      return {
        ...state,
      };
    },
    addCart: (state, action) => {
      console.log(action.payload);
      // let quantity =
      //   action.payload.quantity === undefined ? 1 : action.payload.quantity;
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: action.payload.quantity,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
        };
        state.carts.push(cart);
      } else {
        let check = false;
        state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let _quantityCur = item.quantity + action.payload.quantity;
            item.quantity = _quantityCur;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            id: action.payload.id,
            quantity: action.payload.quantity,
            title: action.payload.title,
            image: action.payload.image,
            price: action.payload.price,
          };
          state.carts.push(_cart);
        }
      }
      state.numberCart++;
    },
    deleteCart: (state, action) => {
      state.numberCart--;
      state.carts = state.carts.filter((item) => item.id !== action.payload.id);
    },
    increaseQuantity: (state, action) => {
      state.carts = action.payload;
      state.numberCart = state.carts.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
    },
    decreaseQuantity: (state, action) => {
      state.carts = action.payload;
      state.numberCart = state.carts.reduce((acc, cur) => {
        return acc + cur.quantity;
      }, 0);
    },
  },
});
export const {
  clearAllCart,
  getNumberCart,
  addCart,
  deleteCart,
  decreaseQuantity,
  increaseQuantity,
} = CartItemSlicer.actions;
export default CartItemSlicer.reducer;
