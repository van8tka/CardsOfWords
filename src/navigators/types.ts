import Dictionary from '@models/Dictionary';
import ThemeOfWords from '@models/ThemeOfWords';

export type MainStackParamList = {
  MainScreen: undefined;
  DictionaryCreateScreen: undefined;
  DictionaryEditScreen: { dictionary: Dictionary };
  ThemeWordsCreateScreen: { idDictionary: number };
  ThemeWordsEditScreen: {themeOfWords: ThemeOfWords};
};
