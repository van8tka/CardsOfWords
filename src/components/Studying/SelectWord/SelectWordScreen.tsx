import React from 'react';
import {Text, View} from 'react-native';
import styles from '@components/ListWords/styles';
import {useThemes} from '@utils/themes/ThemeContext';

function SelectWordScreen({route}) {
  console.log('+++ SelectWordScreen.route: ', route);
  const theme = useThemes();
  return <View style={styles(theme).container}>
    <Text>{'Select Word Screen'}</Text></View>;
}

export default SelectWordScreen;
