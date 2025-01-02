import { configureStore } from '@reduxjs/toolkit';
import dictionarySlice from './slices/dictionarySlice';
import appSlice from '@redux/slices/appSlice';

const store = configureStore({
  reducer:{
    dictionary: dictionarySlice,
    app: appSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

