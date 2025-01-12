import {View} from 'react-native';
import {useState} from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import React from 'react';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {addDictionary} from '@redux/slices/dictionarySlice';
import {useNavigation} from '@react-navigation/native';
import LeftRightSuccessHeader from '@primitives/ui/CustomHeader/LeftRightSuccessHeader';
import {ToastTypeEnum, useToast} from '@utils/toast/ToastContext';
import InputDictionary from '@components/DictionaryForm/InputDictionary/InputDictionary';
import {useThemes} from '@utils/themes/ThemeContext';
import {appStyles} from '../../../App.styles';

function DictionaryCreateScreen() {
  const [text, setText] = useState('');

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

    showToast(localization.successAddedDictionary, ToastTypeEnum.success);
    dispatch(addDictionary(name));
    navigation.goBack();
  }

  return (
    <View style={appStyles(theme).screenContainer}>
      <LeftRightSuccessHeader title={localization.addDictionary} onPressRight={onPressContinue} />
      <InputDictionary text={text} setText={setText} placeholder={localization.dictionaryPlaceholder} />
    </View>
  );
}

export default DictionaryCreateScreen;
