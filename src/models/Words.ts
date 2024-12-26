 type Word = {
  id: number;
  idTheme: number;
  //was EngWord
  foreign: string;
   //was RusWord
  translation: string;
  transcription: string;
  isLearned: boolean;
}

export default Word;
