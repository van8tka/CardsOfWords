import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ThemeOfWords from '../../../../models/ThemeOfWords';
import {ITheme} from '@utils/themes/ITheme';
import styles from './styles';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';

interface IItemContentProps {
  theme: ITheme,
  onAddTheme: () => void,
  addTitleBtn: string,
  themeWord: ThemeOfWords[],
}

function ItemsContainer({theme, themeWord, onAddTheme, addTitleBtn}: IItemContentProps) {

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

  const renderAddedTheme = () => {
    return (
      <TouchableOpacity onPress={onAddTheme}>
        <View style={styles(theme).addBtnContainer}>
          <Text style={styles(theme).addTitle}>{addTitleBtn}</Text>
        </View>
      </ TouchableOpacity>
    );
  };

  return (
    <View style={styles(theme).accordBody}>
      {renderAddedTheme()}
      {themeWord.map((item) => renderItem(item))}
    </View>
  );
}

export default ItemsContainer;
