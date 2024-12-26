import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ThemeOfWords from '../../../../models/ThemeOfWords';
import {ITheme} from '@utils/themes/ITheme';
import styles from './styles';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';

interface IItemContentProps {
  theme: ITheme,
  themeWord: ThemeOfWords[],
}

function ItemContainer({theme, themeWord}: IItemContentProps) {

  // @ts-ignore
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity key={item.id} onPress={() => console.log('+++++++ PRESS: ',item)}>
        <View style={styles(theme).itemContainer}>
          <Text style={styles(theme).title}>{item.name}</Text>
          <Text style={styles(theme).percent}>{percentFormatter(item.percentOfLearned)}</Text>
        </View>
      </ TouchableOpacity>
    );
  };

  return (
    <View style={styles(theme).accordBody}>
      <FlatList data={themeWord} renderItem={renderItem}/>  {}
    </View>
  );
}

export default ItemContainer;
