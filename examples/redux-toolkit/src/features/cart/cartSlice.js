import { createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit';

import { checkout } from '../../services/api';

export const CHECKOUT_STATE = {
  LOADING: 'LOADING',
  READY: 'READY',
  ERROR: 'ERROR',
};

const initialState = {
  items: {},
  checkoutState: CHECKOUT_STATE.READY,
};

export const checkoutCart = createAsyncThunk('cart/checkout', async (items) => {
  const response = await checkout(items);
  return response;
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      const product = state.items[productId];

      if (product) {
        state.items[productId]++;
      } else {
        state.items[productId] = 1;
      }
    },
    removeFromCart(state, action) {
      delete state.items[action.payload];
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      state.items[id] = quantity;
    },
  },
  extraReducers: function (builder) {
    builder.addCase(checkoutCart.pending, (state, action) => {
      state.checkoutState = CHECKOUT_STATE.LOADING;
    })
    builder.addCase(checkoutCart.fulfilled, (state, action) => {
      state.checkoutState = CHECKOUT_STATE.READY;
    })
    builder.addCase(checkoutCart.rejected, (state, action) => {
      state.checkoutState = CHECKOUT_STATE.ERROR;
    })
  },
});


export function getNumItems(state) {
  console.log('getNumItems');
  return Object.values(state.cart.items).reduce((sum, num) => sum + num, 0);
}

export const getMemorizedNumItems = createSelector(
  (state) => state.cart.items,
  (items) => {
    console.log('getMemorizedNumItems');
    return Object.values(items).reduce((sum, num) => sum + num, 0);
  }
)

export const getTotalPrice = createSelector(
  (state) => state.cart.items,
  (state) => state.products.list,
  (items, products) => {
    const total = Object.keys(items)
      .map((id) => products[id].price * items[id])
      .reduce((sum, price) => sum + price, 0);

    return total.toFixed(2);
  }
);

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
