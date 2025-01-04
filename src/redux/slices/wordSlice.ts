import Word from '@models/Words';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  words: [
    {
      id: 1,
      idTheme: 1,
      foreign: 'book',
      translation: 'книга',
      transcription: '[boo:k]',
      isLearned: false,
    },
    {
      id: 2,
      idTheme: 1,
      foreign: 'adult',
      translation: 'взрослый',
      transcription: '[ˈædʌlt]',
      isLearned: false,
    },
    {
      id: 3,
      idTheme: 1,
      foreign: 'age',
      translation: 'возраст',
      transcription: '[eɪdʒ]',
      isLearned: false,
    },
  ],
};


const wordSlice = createSlice({
  name: 'wordSlice',
  initialState: initialState,
  reducers: {
  addWord: (state, action: PayloadAction<Word>) => {
    const lastId = state.words?.at(-1)?.id || 0;

    state.words.push({...action.payload, id: lastId + 1});
  },

    addMultiWords: (state, action: PayloadAction<Array<Word>>) => {
    const lastId = state.words?.at(-1)?.id || 0;
    const newWords: Word[] = action.payload?.map((item, index)=> {
      return {
        ...item,
        id: lastId + 1 + index,
      };
    });

    state.words = {...state.words, ...newWords};
    },

    updateWord: (state, action: PayloadAction<Word>) => {
      const index = state.words.findIndex((d) => d.id === action.payload.id);
      state.words[index] = action.payload;
    },

    removeWord: (state, action: PayloadAction<number>) => {
      const index = state.words.findIndex((d) => d.id === action.payload);
      state.words.splice(index, 1);
    },

    removeWordsByThemeId: (state, action: PayloadAction<number>) => {
      state.words = state.words.filter((d) => d.idTheme !== action.payload);
    },
  },
});

export const {
  addWord,
  addMultiWords,
  updateWord,
  removeWord,
  removeWordsByThemeId,
} = wordSlice.actions;

export default wordSlice.reducer;
