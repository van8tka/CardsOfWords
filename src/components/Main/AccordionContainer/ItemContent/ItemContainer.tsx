import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ThemeOfWords from '../../../../models/ThemeOfWords';
import {ITheme} from '@utils/themes/ITheme';
import styles from './styles';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';
import SwipeItem from '@primitives/ui/SwipeableItem/SwipeItem';

interface IItemContentProps {
  theme: ITheme,
  onAddTheme: () => void,
  onDelete: (id: number) => void,
  onEdit: (themeWords: ThemeOfWords) => void,
  onSelect: (themeWords: ThemeOfWords) => void,
  addTitleBtn: string,
  themeWords: ThemeOfWords[],
}

function ItemsContainer({theme, themeWords, onAddTheme, addTitleBtn, onEdit, onDelete, onSelect}: IItemContentProps) {
  // @ts-ignore
  const renderItem = (item: ThemeOfWords) => {
    return (
      <TouchableOpacity onPress={() => onSelect(item)}>
        <SwipeItem
          onDelete={() => onDelete(item.id)}
          onEdit={() => onEdit(item)}>
          <View style={styles(theme).itemContainer}>
            <Text style={styles(theme).title}>{item.name}</Text>
            <Text style={styles(theme).percent}>{percentFormatter(item.percentOfLearned)}</Text>
          </View>
        </SwipeItem>
      </ TouchableOpacity>
    );
  };

  const renderAddedTheme = () => {
    return (
      <TouchableOpacity onPress={onAddTheme}>
        <View style={styles(theme).addBtnContainer}>
          <Text style={styles(theme).addTitle}>{addTitleBtn}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles(theme).accordBody}>
      {renderAddedTheme()}
      <FlatList
        keyExtractor={(item, index) => `${item.id}-${item.idDictionary}-${index}`}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        data={themeWords}
        renderItem={(item) => renderItem(item.item)}
      />
    </View>
  );
}

export default ItemsContainer;
