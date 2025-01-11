import {View} from 'react-native';
import {useState} from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import React from 'react';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {updateDictionary} from '@redux/slices/dictionarySlice';
import {useNavigation} from '@react-navigation/native';
import LeftRightSuccessHeader from '@primitives/ui/CustomHeader/LeftRightSuccessHeader';
import {ToastTypeEnum, useToast} from '@utils/toast/ToastContext';
import Dictionary from '@models/Dictionary';
import InputDictionary from '@components/DictionaryForm/InputDictionary/InputDictionary';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

// @ts-ignore
const DictionaryEditScreen = ({route}) => {
  const dictionary = route.params.dictionary as Dictionary;
  const [text, setText] = useState(dictionary.name);
  const theme = useThemes();
  const localization = useLocalization();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const showToast = useToast();


  function onPressContinue(){
    const name = text.trim();

    if(!name){
      showToast(localization.errorEmptyDictionary, ToastTypeEnum.error);
      return;
    }

    showToast(localization.successEditDictionary, ToastTypeEnum.success);
    dispatch(updateDictionary({id: dictionary.id, name: name, percentOfLearned: dictionary.percentOfLearned}));
    navigation.goBack();
  }

  return (
    <View style={styles(theme).container}>
      <LeftRightSuccessHeader title={localization.editDictionary} onPressRight={onPressContinue} />
      <InputDictionary text={text} setText={setText} placeholder={localization.dictionaryPlaceholder} />
    </View>
  );
};

export default DictionaryEditScreen;
