import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ThemeOfWords from '@models/ThemeOfWords';


const initialState = {
  themes: [
    {
    id: 1,
    name: 'Дом',
    idDictionary: 1,
    percentOfLearned: 25,
    lastUpdate: new Date(),
    isBeginLearned: true,
    },
    {
      id: 2,
      name: 'Аэропорт',
      idDictionary: 1,
      percentOfLearned: 0,
      lastUpdate: new Date(),
      isBeginLearned: false,
    },
    {
      id: 3,
      name: 'Тело человека',
      idDictionary: 1,
      percentOfLearned: 25,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 4,
      name: 'Популярные',
      idDictionary: 2,
      percentOfLearned: 30,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 5,
      name: 'Как пройти',
      idDictionary: 2,
      percentOfLearned: 87,
      lastUpdate: new Date(),
      isBeginLearned: false,
    },
    {
      id: 6,
      name: 'Путешествие',
      idDictionary: 2,
      percentOfLearned: 15,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 7,
      name: 'Автомобиль',
      idDictionary: 2,
      percentOfLearned: 30,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 8,
      name: 'Космос',
      idDictionary: 2,
      percentOfLearned: 87,
      lastUpdate: new Date(),
      isBeginLearned: false,
    },
    {
      id: 9,
      name: 'Корабль',
      idDictionary: 2,
      percentOfLearned: 15,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 10,
      name: 'Животные',
      idDictionary: 2,
      percentOfLearned: 30,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 11,
      name: 'Строение человека',
      idDictionary: 2,
      percentOfLearned: 87,
      lastUpdate: new Date(),
      isBeginLearned: false,
    },
    {
      id: 12,
      name: 'Кухня',
      idDictionary: 2,
      percentOfLearned: 15,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 13,
      name: 'Ресторан',
      idDictionary: 2,
      percentOfLearned: 30,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 14,
      name: 'Ванная',
      idDictionary: 2,
      percentOfLearned: 87,
      lastUpdate: new Date(),
      isBeginLearned: false,
    },
    {
      id: 15,
      name: 'Квартира',
      idDictionary: 2,
      percentOfLearned: 15,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 7,
      name: 'Популярные',
      idDictionary: 3,
      percentOfLearned: 10,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 8,
      name: 'Автвокзал',
      idDictionary: 3,
      percentOfLearned: 0,
      lastUpdate: new Date(),
      isBeginLearned: false,
    },
    {
      id: 9,
      name: 'Аэропорт',
      idDictionary: 3,
      percentOfLearned: 0,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 10,
      name: 'Работа',
      idDictionary: 3,
      percentOfLearned: 0,
      lastUpdate: new Date(),
      isBeginLearned: true,
    },
    {
      id: 11,
      name: 'Характер человека',
      idDictionary: 3,
      percentOfLearned: 0,
      lastUpdate: new Date(),
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
      const newTheme: ThemeOfWords = {
        id: lastId + 1,
        idDictionary: action.payload.idDictionary,
        name: action.payload.name,
        percentOfLearned: 0,
        isBeginLearned: false,
        lastUpdate: new Date(),
      };
      state.themes.push(newTheme);
    },

    updateTheme: (state, action: PayloadAction<ThemeOfWords>) => {
      const index = state.themes.findIndex((d) => d.id === action.payload.id);
      const updatedTheme = action.payload;
      updatedTheme.lastUpdate = new Date();
      state.themes[index] = updatedTheme;
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
          lastUpdate: new Date(),
        };
      });
      state.themes = {...state.themes, ...newThemes};
    }
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

