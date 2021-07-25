import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  news: [1,2,3,4,5,6,7,8,9,10],
};

export const counterSlice = createSlice({
  name: 'counter',
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
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state) => state.counter.value;
export const newsFake = (state) => state.counter.news;


export default counterSlice.reducer;
