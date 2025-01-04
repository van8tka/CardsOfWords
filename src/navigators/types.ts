import Dictionary from '@models/Dictionary';
import ThemeOfWords from '@models/ThemeOfWords';
import Word from '@models/Words';

export type MainStackParamList = {
  MainScreen: undefined;
  DictionaryCreateScreen: undefined;
  DictionaryEditScreen: { dictionary: Dictionary };
  ThemeWordsCreateScreen: { idDictionary: number };
  ThemeWordsEditScreen: {themeOfWords: ThemeOfWords};
  WordCreateScreen: { idTheme: number };
  WordEditScreen: { word: Word };
};
