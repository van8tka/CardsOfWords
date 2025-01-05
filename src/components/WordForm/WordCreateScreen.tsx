import {View} from 'react-native';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';
import InputWordsForm from '@components/WordForm/InputWordsForm/InputWordsForm';
import Word from '@models/Words';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {addWord} from '@redux/slices/wordSlice';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import {useNavigation} from '@react-navigation/native';
import {ToastTypeEnum, useToast} from '@utils/toast/ToastContext';

// @ts-ignore
function WordCreateScreen({route}) {
  const localization = useLocalization();
  const theme = useThemes();
  const idTheme = route?.params?.idTheme;
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const showToast = useToast();


  function onAddWord(word: Word){
    dispatch(addWord(word));
    showToast(localization.addWordToast, ToastTypeEnum.success);
    navigation.goBack();
  }

  return (
    <View style={styles(theme).container}>
      <LeftCommonHeader title={localization.addWord} />
      <InputWordsForm idTheme={idTheme} onSubmitForm={onAddWord}/>
    </View>
  );
}

export default WordCreateScreen;
