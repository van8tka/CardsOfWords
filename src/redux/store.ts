import {combineReducers, configureStore} from '@reduxjs/toolkit';
import dictionarySlice from './slices/dictionarySlice';
import themeOfWordsSlice from '@redux/slices/themeOfWordsSlice';
import wordSlice from '@redux/slices/wordSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import appSlice from '@redux/slices/appSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['navigation'],
  version: 1,
};

const rootReducer = combineReducers({
  app: appSlice,
  dictionary: dictionarySlice,
  themeOfWords: themeOfWordsSlice,
  words: wordSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export {store, persistor};

