import Word from '@models/Words';

export function parseContent(idTheme: number, content: string): Word[] {
  const lines = content?.split(/\r?\n/);
  const words: Word[] = [];
  const regex = /(.*?)\s*\[(.*?)\]\s*(.*)/;

  for (let i = 0; i < lines?.length; i++) {
    const match = regex.exec(lines[i]);
    if(match){
      const word: Word = {
        id: 0,
        idTheme: idTheme,
        foreign: match[3],
        transcription: match[2] ? `[${match[2]}]` : '',
        translation: match[1],
        isLearned: false,
      };
      words.push(word);
    }
  }
  return words;
}
