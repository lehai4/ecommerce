import { createSlice } from "@reduxjs/toolkit";

export const CartItemSlicer = createSlice({
  name: "cart",
  initialState: {
    numberCart: 0,
    carts: [],
  },
  reducers: {
    addCart: (state, action) => {
      let quantity =
        action.payload.quantity === undefined ? 1 : action.payload.quantity;
      if (state.numberCart === 0) {
        let cart = {
          id: action.payload.id,
          quantity: quantity,
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
    resetCart: (state, action) => {
      // Gửi đơn hàng đi
      // action.payload: Gửi data thông tin đặt hàng. Tiến hành giao hàng
      console.log(action.payload);
      // Cập nhập giỏ hàng
      return {
        ...state,
        numberCart: 0,
        carts: [],
      };
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
  resetCart,
  decreaseQuantity,
  increaseQuantity,
} = CartItemSlicer.actions;
export default CartItemSlicer.reducer;
