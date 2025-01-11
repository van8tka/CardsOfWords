import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ThemeOfWords from '@models/ThemeOfWords';

const getCurrentDate = (): string => {
  return  new Date().toISOString();
};

const initialState = {
  themes: [
    {
    id: 1,
    name: 'Мои слова',
    idDictionary: 1,
    percentOfLearned: 0,
    lastUpdate: getCurrentDate(),
    isBeginLearned: true,
    },
  ],
};

const themeOfWordsSlice = createSlice({
  name: 'themeOfWordsSlice',
  initialState: initialState,
  reducers: {
    addTheme: (state, action: PayloadAction<{name: string, idDictionary: number}>) => {
      const lastId = state.themes?.at(-1)?.id || 0;
      const currentDate = getCurrentDate();

      const newTheme: ThemeOfWords = {
        id: lastId + 1,
        idDictionary: action.payload.idDictionary,
        name: action.payload.name,
        percentOfLearned: 0,
        isBeginLearned: false,
        lastUpdate: currentDate,
      };

      state.themes.push(newTheme);
    },

    updateTheme: (state, action: PayloadAction<ThemeOfWords>) => {
      const index = state.themes.findIndex((d) => d.id === action.payload.id);
      const currentDate = getCurrentDate();
      state.themes[index] = {...action.payload,  lastUpdate: currentDate};
    },

    removeTheme: (state, action: PayloadAction<number>) => {
        const index = state.themes.findIndex((d) => d.id === action.payload);
        state.themes.splice(index, 1);
    },

    removeThemesByDictionary: (state, action: PayloadAction<number>) => {
      state.themes = state.themes.filter((d) => d.idDictionary !== action.payload);
    },

    addMultiThemes: (state, action: PayloadAction<ThemeOfWords[]>) => {
      const lastId = state.themes?.at(-1)?.id || 0;
      const currentDate = getCurrentDate();
      const newThemes = action.payload.map((item, index) => {
        return {
          id: lastId + 1 + index,
          idDictionary: item.idDictionary,
          name: item.name,
          percentOfLearned: 0,
          isBeginLearned: false,
          lastUpdate: currentDate,
        };
      });
      state.themes = [...state.themes, ...newThemes];
    },
  },
});

export const {
  addTheme,
  updateTheme,
  removeTheme,
  removeThemesByDictionary,
  addMultiThemes,
} = themeOfWordsSlice.actions;

export default themeOfWordsSlice.reducer;

