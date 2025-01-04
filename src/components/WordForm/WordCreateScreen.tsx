import {View} from 'react-native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

function WordCreateScreen() {
  const localization = useLocalization();
  const theme = useThemes();
  return (
    <View style={styles(theme).container}>
      <LeftRightCommonHeader title={localization.addWord} onPressRight={()=>{}} />
    </View>
  );
}

export default WordCreateScreen;
