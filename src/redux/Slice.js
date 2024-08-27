import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'Ani',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = Slice.actions;
export default Slice.reducer;
