import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import log from '@utils/logger';
import Word from '@models/Words';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {addMultiWords} from '@redux/slices/wordSlice';

export function useImportFromFile() {

  const dispatch = useAppDispatch();

  async function pickFile(idTheme: number) {
    log.info('useImportFromFile','Picking file');
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.plainText],
      });
       if(res && res.length > 0) {
         const filePath = res[0].uri;
         const content = await RNFS.readFile(filePath, 'utf8');
         log.debug(content);
         if(!content)
         {
           log.warn('useImportFromFile', 'selected file is empty: ', filePath);
           return;
         }
         const words = parseContent(idTheme, content);
          if(words && words.length > 0){
            dispatch(addMultiWords(words));
          }
       }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Пользователь отменил выбор файла
        log.info('useImportFromFile','User cancelled the picker');
      } else {
        log.error('useImportFromFile',err);
      }
    }
  }


  function parseContent(idTheme: number, content: string): Word[] {
    const lines = content.split(/\r?\n/);
    const words: Word[] = [];
    const regex = /(.*?)\s*\[(.*?)\]\s*(.*)/;

    for (let i = 0; i < lines.length; i++) {
      const match = regex.exec(lines[i]);
      if(match){
        const word: Word = {
          id: 0,
          idTheme: idTheme,
          foreign: match[1],
          transcription: match[2],
          translation: match[3],
          isLearned: false,
        };
        words.push(word);
      }
    }
    return words;
  }


  return pickFile;
}
