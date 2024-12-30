import { configureStore } from '@reduxjs/toolkit';
import dictionarySlice from './slices/dictionarySlice';

const store = configureStore({
  reducer:{
    dictionary: dictionarySlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

