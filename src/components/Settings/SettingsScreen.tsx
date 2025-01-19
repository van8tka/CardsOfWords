import {View} from 'react-native';
import React from 'react';
import {appStyles} from '../../../App.styles';
import {useThemes} from '@utils/themes/ThemeContext';
import SwitchComponent from '@primitives/ui/SwitchComponent/SwitchComponent';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '@hooks/reduxCommonHooks';
import {switchSuggestTranscriptKeyboard} from '@redux/slices/appSlice';
import {useLocalization} from '@utils/localization/LocalizationContext';
import TitleDescriptionComponent from '@primitives/ui/TitleDescriptionComponent/TitleDescriptionComponent';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import {RouteScreensEnum} from '@navigators/screens';

function SettingsScreen() {
  const theme = useThemes();
  const dispatch = useAppDispatch();
  const locale = useLocalization();
  const navigator = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const isTranscriptKeyboard = useAppSelector(state => state.app.isTranscriptKeyboard);
  const voiceLanguage = useAppSelector(state => state.app.voiceLanguage);


  function onChangeSuggestionKeyboardTranscription(isSuggestion: boolean) {
    dispatch(switchSuggestTranscriptKeyboard(isSuggestion));
  }

  function onNavigateToVoiceLanguages(){
    navigator.navigate(RouteScreensEnum.VoiceLanguagesScreen);
  }

  return (
    <View style={[appStyles(theme).screenContainer, styles.container]}>
      <SwitchComponent
        title={locale.isSuggestTranscriptKeyboard}
        description={locale.suggest}
        isSwitching={isTranscriptKeyboard}
        onSwitchChange={onChangeSuggestionKeyboardTranscription}
      />
        <TitleDescriptionComponent
          title={locale.voiceLanguage}
          description={locale.chooseVoiceLanguage}
          rightText={voiceLanguage.language || ''}
          onClick={onNavigateToVoiceLanguages}
        />
    </View>
  );
}

export default SettingsScreen;
