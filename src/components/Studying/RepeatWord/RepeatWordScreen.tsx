import React from 'react';
import {Text, View} from 'react-native';
import styles from '@components/ListWords/styles';
import {useThemes} from '@utils/themes/ThemeContext';

function RepeatWordScreen() {
  const theme = useThemes();
  return   <View style={styles(theme).container}>
    <Text>{'Repeat word'}</Text></View>;
}

export default RepeatWordScreen;
