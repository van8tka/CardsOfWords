import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ThemeOfWords from '../../../../models/ThemeOfWords';
import {ITheme} from '@utils/themes/ITheme';
import styles from './styles';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';

interface IItemContentProps {
  theme: ITheme,
  themeWord: ThemeOfWords[],
}

function ItemsContainer({theme, themeWord}: IItemContentProps) {

  // @ts-ignore
  const renderItem = (item: ThemeOfWords) => {
    return (
      <TouchableOpacity key={`${item.id}, ${item.idDictionary}`} onPress={() => console.log('+++++++ PRESS: ',item)}>
        <View style={styles(theme).itemContainer}>
          <Text style={styles(theme).title}>{item.name}</Text>
          <Text style={styles(theme).percent}>{percentFormatter(item.percentOfLearned)}</Text>
        </View>
      </ TouchableOpacity>
    );
  };

  return (
    <View style={styles(theme).accordBody}>
      {themeWord.map((item) => renderItem(item))}
    </View>
  );
}

export default ItemsContainer;
