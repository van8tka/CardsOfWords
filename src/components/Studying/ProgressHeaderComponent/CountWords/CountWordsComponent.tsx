import {Text, View} from 'react-native';
import styles from '@components/Studying/ProgressHeaderComponent/CountWords/styles';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';

interface ICountWordsProps {
  allWords: number,
  learnedWords: number,
  unlearnedWords: number,
}

function CountWordsComponent({allWords, learnedWords, unlearnedWords}: ICountWordsProps) {
  const localize = useLocalization();
  const theme = useThemes();

  return (
    <View style={styles(theme).titleContainer}>
        <Text style={styles(theme).title}>{`${localize.allWords}: ${allWords}`}</Text>
      <Text style={styles(theme).title}>{`${localize.learnedWords}: ${learnedWords}`}</Text>
      <Text style={styles(theme).title}>{`${localize.unlearnedWords}: ${unlearnedWords}`}</Text>
  </View>
);
}

export default CountWordsComponent;
