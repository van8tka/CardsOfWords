import React from 'react';
import {Text, View} from 'react-native';
import styles from '@components/ListWords/styles';
import {useThemes} from '@utils/themes/ThemeContext';

function WriteWordScreen() {
  const theme = useThemes();
  return <View style={styles(theme).container}>
    <Text>{'Write Word Screen'}</Text></View>;
}

export default WriteWordScreen;
