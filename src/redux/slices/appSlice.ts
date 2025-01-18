import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import IVoiceLang from '@models/IVoiceLang';

const initialState = {
  isTranscriptKeyboard: true,
  voiceLanguage: {} as IVoiceLang,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    switchSuggestTranscriptKeyboard: (state, action: PayloadAction<boolean>) => {
      state.isTranscriptKeyboard = action.payload;
    },
    setVoiceLanguage: (state, action: PayloadAction<IVoiceLang>) => {
      state.voiceLanguage = action.payload;
    },
  },
});

export const {
  switchSuggestTranscriptKeyboard,
  setVoiceLanguage } = appSlice.actions;

export default appSlice.reducer;
