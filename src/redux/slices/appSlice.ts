import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  isTranscriptKeyboard: true,
  voiceLanguage: 'en-US',
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    switchSuggestTranscriptKeyboard: (state, action: PayloadAction<boolean>) => {
      state.isTranscriptKeyboard = action.payload;
    },
    setVoiceLanguage: (state, action: PayloadAction<string>) => {
      state.voiceLanguage = action.payload;
    },
  },
});

export const {
  switchSuggestTranscriptKeyboard,
  setVoiceLanguage } = appSlice.actions;

export default appSlice.reducer;
