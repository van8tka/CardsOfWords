 type Word = {
  id: number;
  idDictionary: number;
  //was EngWord
  foreign: string;
   //was RusWord
  translation: string;
  transcription: string;
  isLearned: boolean;
}

export default Word;
