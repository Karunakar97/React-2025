import { createSlice } from "@reduxjs/toolkit";
const cartState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: { cartState },
  reducers: {
    addToCart: (state, action) => {
      state.cartState.push(action.payload);
    },
    removeCart: (state, action) => {
      state.cartState.pop();
    },
  },
});

export const { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
