import React from 'react';
import {Text, View} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import {appStyles} from '../../../../App.styles';

// @ts-ignore
function WriteWordScreen({route}) {
  console.log('+++ WriteWordScreen.route: ', route);
  const theme = useThemes();
  return (
    <View style={appStyles(theme).screenContainer}>
      <Text>{'Write Word Screen'}</Text>
    </View>
  );
}

export default WriteWordScreen;
