import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    receivedProducts: (state, action) => {
      const products = action.payload;
      products.forEach(product => {
        state.list[product.id] = product;
      });
    }
  }
});

export const { receivedProducts } = productsSlice.actions;
export default productsSlice.reducer;
