import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isTranscriptKeyboard: true,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    switchSuggestTranscriptKeyboard: (state, action: PayloadAction<boolean>) => {
      state.isTranscriptKeyboard = action.payload;
    },
  },
});

export const { switchSuggestTranscriptKeyboard } = appSlice.actions;

export default appSlice.reducer;
