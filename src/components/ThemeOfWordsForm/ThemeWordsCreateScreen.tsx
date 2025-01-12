import {View} from 'react-native';
import {useState} from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import React from 'react';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {useNavigation} from '@react-navigation/native';
import LeftRightSuccessHeader from '@primitives/ui/CustomHeader/LeftRightSuccessHeader';
import {ToastTypeEnum, useToast} from '@utils/toast/ToastContext';
import {addTheme} from '@redux/slices/themeOfWordsSlice';
import InputThemeWords from '@components/ThemeOfWordsForm/InputThemeWords/InputThemeWords';
import {useThemes} from '@utils/themes/ThemeContext';
import {appStyles} from '../../../App.styles';

// @ts-ignore
function ThemeWordsCreateScreen({route}) {
  const idDictionary = route.params.idDictionary;
  const [text, setText] = useState('');
  const localization = useLocalization();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const showToast = useToast();
  const theme = useThemes();

  function onPressContinue(){
    const name = text.trim();

    if(!name){
      showToast(localization.errorEmptyThemeWords, ToastTypeEnum.error);
      return;
    }

    showToast(localization.successAddedThemeWords, ToastTypeEnum.success);
    dispatch(addTheme({ idDictionary: idDictionary, name: name} ));
    navigation.goBack();
  }

  return (
    <View style={appStyles(theme).screenContainer}>
      <LeftRightSuccessHeader title={localization.addThemeWords} onPressRight={onPressContinue} />
      <InputThemeWords text={text} setText={setText} placeholder={localization.themeWordsPlaceholder} />
    </View>
  );
}

export default ThemeWordsCreateScreen;
