import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from '@components/ListWords/WordsContainer/styles';
import Word from '@models/Words';
import SwipeItem from '@primitives/ui/SwipeableItem/SwipeItem';
import {useLocalization} from '@utils/localization/LocalizationContext';

interface IWordsContainerProps {
  words: Word[],
  onDelete: (id: number) => void,
  onEdit: (word: Word) => void,
}

function WordsContainer({words, onEdit, onDelete}: IWordsContainerProps) {
  const theme = useThemes();

  const localize = useLocalization();

  function renderSeparator(){
    return <View style={styles(theme).separator} />;
  }

  function renderItem(item: Word) {
    return (
      <SwipeItem onEdit={()=>onEdit(item)} onDelete={()=>onDelete(item.id)}>
        <View style={styles(theme).itemContainer}>
          <Text style={styles(theme).foreign}>{item.foreign}</Text>
          <Text style={styles(theme).translate}>{item.translation}</Text>
          {item.transcription && <Text style={styles(theme).transcription}>{item.transcription}</Text>}
        </View>
      </SwipeItem>
    );
  }

  function renderEmptyStub() {
    return (
      <View style={styles(theme).emptyContainer}>
        <Text style={styles(theme).emptyText}>
          {localize.emptyWordsList}
        </Text>
      </View>
    );
  }

  return (
        <FlatList
          ListEmptyComponent={renderEmptyStub}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => `${item.id}:${item.idTheme}`}
          data={words}
          renderItem={(item)=> renderItem(item.item)}
          contentContainerStyle={words.length === 0 ? styles(theme).emptyList : null}
        />
  );
}

export default WordsContainer;
