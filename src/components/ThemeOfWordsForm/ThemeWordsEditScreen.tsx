import {View} from 'react-native';
import {useState} from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import React from 'react';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {useNavigation} from '@react-navigation/native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';
import {ToastTypeEnum, useToast} from '@utils/toast/ToastContext';
import ThemeOfWords from '@models/ThemeOfWords';
import {updateTheme} from '@redux/slices/themeOfWordsSlice';
import InputThemeWords from '@components/ThemeOfWordsForm/InputThemeWords/InputThemeWords';


// @ts-ignore
function ThemeWordsEditScreen({route}) {
  const themeOfWord = route.params.themeOfWords as ThemeOfWords;
  const [text, setText] = useState(themeOfWord.name);
  const localization = useLocalization();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const showToast = useToast();

  function onPressContinue(){
    const name = text.trim();

    if(!name){
      showToast(localization.errorEmptyThemeWords, ToastTypeEnum.error);
      return;
    }
    themeOfWord.name = name;
    showToast(localization.successEditThemeWords, ToastTypeEnum.success);
    dispatch(updateTheme(themeOfWord));
    navigation.goBack();
  }

  return (
    <View>
      <LeftRightCommonHeader title={localization.editThemeWords} onPressRight={onPressContinue} />
      <InputThemeWords text={text} setText={setText} placeholder={localization.themeWordsPlaceholder} />
    </View>
  );
};

export default ThemeWordsEditScreen;
