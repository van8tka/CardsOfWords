import {Text, View} from 'react-native';
import React from 'react';
import {appStyles} from '../../../App.styles';
import {useThemes} from '@utils/themes/ThemeContext';

function SettingsScreen() {
  const theme = useThemes();
  return (
    <View style={appStyles(theme).screenContainer}>
      <Text>{'SettingsScreen'}</Text>
    </View>
  );
}

export default SettingsScreen;
