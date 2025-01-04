import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import ThemeOfWords from '../../../../models/ThemeOfWords';
import {ITheme} from '@utils/themes/ITheme';
import styles from './styles';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';
import SwipeItem from '@primitives/ui/SwipeableItem/SwipeItem';
import IconButton from '@primitives/ui/IconButton/IconButton';
import AddIcon from '@assets/icons/add_transparent_icon.svg';

interface IItemContentProps {
  theme: ITheme,
  onAddTheme: () => void,
  onDelete: (id: number) => void,
  onEdit: (themeWords: ThemeOfWords) => void,
  onSelect: (themeWords: ThemeOfWords) => void,
  onLongPress: (themeWords: ThemeOfWords) => void,
  onAddWord: (id: number) => void,
  addTitleBtn: string,
  themeWords: ThemeOfWords[],
}

function ItemsContainer({
                          theme,
                          onAddWord,
                          themeWords,
                          onAddTheme,
                          addTitleBtn,
                          onEdit,
                          onDelete,
                          onSelect,
                          onLongPress,
}: IItemContentProps) {
  // @ts-ignore
  const renderItem = (item: ThemeOfWords) => {
    return (
      <SwipeItem
        onDelete={() => onDelete(item.id)}
        onEdit={() => onEdit(item)}>
        <View style={styles(theme).container}>
          <TouchableOpacity
            onLongPress={()=>onLongPress(item)}
            onPress={() => onSelect(item)}
            style={styles(theme).touchItem}>
            <View style={styles(theme).itemContainer}>
              <Text style={styles(theme).title}>{item.name}</Text>
              <Text style={styles(theme).percent}>
                {percentFormatter(item.percentOfLearned)}
              </Text>
            </View>
          </ TouchableOpacity>
          <IconButton
            IconSvg={AddIcon}
            width={30}
            height={30}
            onPress={()=>onAddWord(item.id)}/>
        </View>
      </SwipeItem>
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
