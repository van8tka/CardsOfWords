import Dictionary from '@models/Dictionary';

export type MainStackParamList = {
  MainScreen: undefined;
  DictionaryCreateScreen: undefined;
  DictionaryEditScreen: { dictionary: Dictionary };
};
