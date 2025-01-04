import {View} from 'react-native';
import React from 'react';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import {useAppDispatch, useAppSelector} from '@hooks/reduxCommonHooks';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from '@components/ListWords/styles';
import Word from '@models/Words';
import {removeWord} from '@redux/slices/wordSlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import {RouteScreensEnum} from '@navigators/screens';
import WordsContainer from '@components/ListWords/WordsContainer/WordsContainer';

// @ts-ignore
function ListWordsScreen({route}) {
  const {title, idTheme} = route.params;
  const words = useAppSelector(state => state.words.words);
  const theme = useThemes();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  function onDeleteWord(idWord: number){
    dispatch(removeWord(idWord));
  }

  function onEditWord(word: Word){
    navigation.navigate(RouteScreensEnum.WordEditScreen, {word: word});
  }

  return (
    <View style={styles(theme).container}>
      <LeftCommonHeader title={title} />
       <WordsContainer words={words.filter(item => item.idTheme === idTheme)} onDelete={onDeleteWord} onEdit={onEditWord}/>
    </View>
  );
}

export default ListWordsScreen;
