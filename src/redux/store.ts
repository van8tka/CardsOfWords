import { configureStore } from '@reduxjs/toolkit';
import dictionarySlice from './slices/dictionarySlice';
import appSlice from '@redux/slices/appSlice';
import themeOfWordsSlice from '@redux/slices/themeOfWordsSlice';
import wordSlice from '@redux/slices/wordSlice';

const store = configureStore({
  reducer:{
    dictionary: dictionarySlice,
    app: appSlice,
    themeOfWords: themeOfWordsSlice,
    words: wordSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

