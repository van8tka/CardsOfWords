import {View} from 'react-native';
import React from 'react';
import {appStyles} from '../../../App.styles';
import {useThemes} from '@utils/themes/ThemeContext';
import SwitchComponent from '@primitives/ui/SwitchComponent/SwitchComponent';
import styles from './styles';
import {useAppDispatch, useAppSelector} from '@hooks/reduxCommonHooks';
import {switchSuggestTranscriptKeyboard} from '@redux/slices/appSlice';
import {useLocalization} from '@utils/localization/LocalizationContext';

function SettingsScreen() {
  const theme = useThemes();
  const dispatch = useAppDispatch();
  const locale = useLocalization();
  const isTranscriptKeyboard = useAppSelector(state => state.app.isTranscriptKeyboard);


  function onChangeSuggestionKeyboardTranscription(isSuggestion: boolean) {
    dispatch(switchSuggestTranscriptKeyboard(isSuggestion));
  }

  return (
    <View style={[appStyles(theme).screenContainer, styles.container]}>
      <SwitchComponent
        title={locale.isSuggestTranscriptKeyboard}
        description={locale.suggest}
        isSwitching={isTranscriptKeyboard}
        onSwitchChange={onChangeSuggestionKeyboardTranscription}
      />
    </View>
  );
}

export default SettingsScreen;
