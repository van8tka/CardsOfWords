import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ThemeOfWords from '@models/ThemeOfWords';


const initialState = {
  themes: [
    {
    id: 1,
    name: 'Дом',
    idDictionary: 1,
    percentOfLearned: 25,
    lastUpdate: new Date().toLocaleString(),
    isBeginLearned: true,
    },
    {
      id: 2,
      name: 'Аэропорт',
      idDictionary: 1,
      percentOfLearned: 0,
      lastUpdate: new Date().toLocaleString(),
      isBeginLearned: false,
    },
  ],
};

const themeOfWordsSlice = createSlice({
  name: 'themeOfWordsSlice',
  initialState: initialState,
  reducers: {
    addTheme: (state, action: PayloadAction<{name: string, idDictionary: number}>) => {
      const lastId = state.themes?.at(-1)?.id || 0;
      const newTheme: ThemeOfWords = {
        id: lastId + 1,
        idDictionary: action.payload.idDictionary,
        name: action.payload.name,
        percentOfLearned: 0,
        isBeginLearned: false,
        lastUpdate: new Date().toLocaleString(),
      };

      state.themes.push(newTheme);
    },

    updateTheme: (state, action: PayloadAction<ThemeOfWords>) => {
      const index = state.themes.findIndex((d) => d.id === action.payload.id);
      state.themes[index] = {
        id: action.payload.id,
        name: action.payload.name,
        percentOfLearned: action.payload.percentOfLearned,
        lastUpdate: new Date().toLocaleString(),
        isBeginLearned: action.payload.isBeginLearned,
        idDictionary: action.payload.idDictionary,
      };
    },

    removeTheme: (state, action: PayloadAction<number>) => {
        const index = state.themes.findIndex((d) => d.id === action.payload);
        state.themes.splice(index, 1);
    },

    removeThemesByDictionary: (state, action: PayloadAction<number>) => {
      const themes = state.themes;

      const removedThemes = state.themes.filter((d) => d.idDictionary === action.payload);
      for (let i = 0; i < removedThemes.length; i++) {
        const index = themes.findIndex((d) => d.id === themes[i].id);
        themes.splice(index, 1);
      }

      state.themes = {...themes};
    },

    addMultiThemes: (state, action: PayloadAction<ThemeOfWords[]>) => {
      const lastId = state.themes?.at(-1)?.id || 0;
      const newThemes = action.payload.map((item) => {
        return {
          id: lastId + 1,
          idDictionary: item.idDictionary,
          name: item.name,
          percentOfLearned: 0,
          isBeginLearned: false,
          lastUpdate: new Date().toLocaleString(),
        };
      });
      state.themes = {...state.themes, ...newThemes};
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

