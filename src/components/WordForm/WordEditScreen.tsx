import {useLocalization} from '@utils/localization/LocalizationContext';
import {View} from 'react-native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from '@components/WordForm/styles';

function WordEditScreen() {
  const localization = useLocalization();
  const theme = useThemes();
  return (
    <View style={styles(theme).container}>
      <LeftRightCommonHeader title={localization.editWord} onPressRight={()=>{}} />
    </View>
  );
}

export default WordEditScreen;
