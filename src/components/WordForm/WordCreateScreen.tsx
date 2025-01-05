import {View} from 'react-native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';
import InputWordsForm from '@components/WordForm/InputWordsForm/InputWordsForm';
import Word from '@models/Words';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {addWord} from '@redux/slices/wordSlice';

// @ts-ignore
function WordCreateScreen({route}) {
  const localization = useLocalization();
  const theme = useThemes();
  const idTheme = route?.params?.idTheme;
  const dispatch = useAppDispatch();

  function onAddWord(word: Word){
    dispatch(addWord(word));
  }

  return (
    <View style={styles(theme).container}>
      <LeftRightCommonHeader title={localization.addWord} onPressRight={()=>{}} />
      <InputWordsForm idTheme={idTheme} onSubmitForm={onAddWord}/>
    </View>
  );
}

export default WordCreateScreen;
