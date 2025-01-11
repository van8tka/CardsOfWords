import {Text, View} from 'react-native';
import React from 'react';
import Word from '@models/Words';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface ICardComponentProps {
  word: Word,
}

function CardComponent({word}: ICardComponentProps) {
  const theme = useThemes();
  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).card}>
        <Text style={styles(theme).text}>{word?.foreign || ''}</Text>
      </View>
    </View>
  );
}

export default CardComponent;
