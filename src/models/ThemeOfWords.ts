/*
* it was Dictionary in old version
 */
type ThemeOfWords = {
  id: number;
  name: string;
  idDictionary: number; //it was idLanguage
  percentOfLearned: number;
  lastUpdate: Date;
  isBeginLearned: boolean;
}

export default ThemeOfWords;
