import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: "idle",
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);

    return response.data;
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = 'error';
      })
  }
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value

export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());

  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
}

export default counterSlice.reducer;
