import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import log from '@utils/logger';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {addMultiWords} from '@redux/slices/wordSlice';
import {parseContent} from '@utils/parseContent';

export function useImportFromFile() {

  const dispatch = useAppDispatch();
  const TAG = 'useImportFromFile';

  async function pickFile(idTheme: number) {
    log.info(TAG,'Picking file');
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
           log.warn(TAG, 'selected file is empty: ', filePath);
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
        log.info(TAG,'User cancelled the picker');
      } else {
        log.error(TAG,err);
      }
    }
  }





  return pickFile;
}
