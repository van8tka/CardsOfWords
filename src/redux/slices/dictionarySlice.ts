import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Dictionary from '@models/Dictionary';

const initialState = {
  dictionaries:
    [
      {
        id: 1,
        name: 'English',
        percentOfLearned: 20,
      },
      {
        id:2,
        name: 'Esperanto',
        percentOfLearned: 0,
      },
      {
        id:3,
        name: 'Марсианское наречие',
        percentOfLearned: 49,
      },
    ],
}

const dictionarySlice = createSlice({
  name: 'dictionary',
  initialState: initialState,
  reducers: {
    addDictionary: (state, action: PayloadAction<string>) => {
      const lastId = state.dictionaries?.at(-1)?.id || 0;
      const newDictionary = {
        id: lastId + 1,
        name: action.payload,
        percentOfLearned: 0,
      };
      state.dictionaries.push(newDictionary);
    },
    removeDictionary: (state, action: PayloadAction<number>) => {
      const index = state.dictionaries.findIndex((d) => d.id === action.payload);
      state.dictionaries.splice(index, 1);
    },
    editDictionary: (state, action: PayloadAction<Dictionary>) => {
      const index = state.dictionaries.findIndex((d) => d.id === action.payload.id);

      state.dictionaries[index] = action.payload;
    },
    addDictionaries: (state, action: PayloadAction<Array<string>>) => {
      const lastId = state.dictionaries?.at(-1)?.id || 0;
      const newDictionaries = action.payload.map((name, i) => {
        return {
          id: lastId + i,
          name: name,
          percentOfLearned: 0,
        };
      });
      state.dictionaries = {...state.dictionaries, ...newDictionaries};
    },
  }});

export const {
  addDictionary,
  removeDictionary,
  editDictionary,
  addDictionaries,
} = dictionarySlice.actions;

export default dictionarySlice.reducer;
