import { configureStore } from '@reduxjs/toolkit';
import AniReducer from './Slice'

const store = configureStore({
  reducer: {
    counter: AniReducer,
  },
});

export default store;
