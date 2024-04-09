import { createSlice } from "@reduxjs/toolkit";

const initialState = { addedToCart: 0, addedProducts: [] };
const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      if (state.addedProducts.some((product) => product.id == id)) {
        state.addedProducts.map((product) => {
          if (product.id == id) {
            product.count += 1;
            product.totalPrice = product.count * product.price;
          }
        });
      } else {
        state.addedProducts.push({
          ...action.payload,
          count: 1,
          totalPrice: price,
        });
        state.addedToCart += 1;
      }
    },
    increaseInCart: (state, action) => {
      state.addedProducts.map((product) => {
        if (product.id == action.payload) {
          product.count += 1;
          product.totalPrice = product.count * product.price;
        }
      });
    },
    decreaseInCart: (state, action) => {
      state.addedProducts.map((product) => {
        if (product.id == action.payload) {
          product.count -= 1;
          product.totalPrice = product.count * product.price;
        }
      });
    },
    removeFromCart: (state, action) => {
            const updateAddedProducts = state.addedProducts.filter(
              (product) => product.id !== action.payload
            );
            state.addedProducts = updateAddedProducts;
            state.addedToCart -= 1;
    },
  },
});

export const { addToCart, increaseInCart, decreaseInCart, removeFromCart } =
  slice.actions;
export default slice.reducer;
