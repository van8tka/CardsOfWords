import {useLocalization} from '@utils/localization/LocalizationContext';
import {View} from 'react-native';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from '@components/WordForm/styles';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import InputWordsForm from '@components/WordForm/InputWordsForm/InputWordsForm';
import Word from '@models/Words';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {updateWord} from '@redux/slices/wordSlice';

// @ts-ignore
function WordEditScreen({route}) {
  const word = route.params.word;
  const localization = useLocalization();
  const theme = useThemes();
  const dispatch = useAppDispatch();

  function onEditWord(editedWord: Word){
    dispatch(updateWord(editedWord));
  }

  return (
    <View style={styles(theme).container}>
      <LeftCommonHeader title={localization.editWord} />
      <InputWordsForm word={word} onSubmitForm={onEditWord}/>
    </View>
  );
}

export default WordEditScreen;
