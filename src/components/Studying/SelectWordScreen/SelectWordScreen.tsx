import React from 'react';
import {Text, View} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import {appStyles} from '../../../../App.styles';

// @ts-ignore
function SelectWordScreen({route}) {

  const theme = useThemes();
  return (
    <View style={appStyles(theme).screenContainer}>
      <Text>{'Select Word Screen'}</Text>
    </View>
  );
}

export default SelectWordScreen;
