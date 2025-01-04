import {FlatList, Text, View} from 'react-native';
import React from 'react';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import {useAppDispatch, useAppSelector} from '@hooks/reduxCommonHooks';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from '@components/ListWords/styles';
import Word from '@models/Words';
import SwipeItem from '@primitives/ui/SwipeableItem/SwipeItem';
import {removeWord} from '@redux/slices/wordSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import {RouteScreensEnum} from '@navigators/screens';
import {useLocalization} from '@utils/localization/LocalizationContext';

// @ts-ignore
function ListWordsScreen({route}) {
  const {title, idTheme} = route.params;
  const words = useAppSelector(state => state.words.words.filter(item => item.idTheme === idTheme));
  const theme = useThemes();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const localize = useLocalization();
  function onDeleteWord(idWord: number){
    dispatch(removeWord(idWord));
  }

  function onEditWord(word: Word){
    navigation.navigate(RouteScreensEnum.WordEditScreen, {word: word});
  }

  function renderSeparator(){
    return <View style={styles(theme).separator} />;
  }

  function renderItem(item: Word) {
    return (
      <SwipeItem onEdit={()=>onEditWord(item)} onDelete={()=>onDeleteWord(item.id)}>
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
    <View style={styles(theme).container}>
      <LeftCommonHeader title={title} />
        <FlatList
          ListEmptyComponent={renderEmptyStub}
          ItemSeparatorComponent={renderSeparator}
          keyExtractor={(item) => `${item.id}:${item.idTheme}`}
          data={words}
          renderItem={(item)=> renderItem(item.item)}
          contentContainerStyle={words.length === 0 ? styles(theme).emptyList : null}
        />
    </View>
  );
}

export default ListWordsScreen;
