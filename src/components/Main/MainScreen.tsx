import { View} from 'react-native';
import log from '@utils/logger.ts';
import React from 'react';
import MainFloatingBtnContainer from '@components/Main/FloatingBtnContainer/MainFloatingBtnContainer';
import AccordionContainer from '@components/Main/AccordionContainer/AccordionContainer';
import styles from '@components/Main/styles';
import {useThemes} from '@utils/themes/ThemeContext';
import {mockThemes} from '../../mock';
import {useAppSelector} from '@hooks/reduxCommonHooks';
import Dictionary from '@models/Dictionary';
import {useNavigation} from '@react-navigation/native';
import {RouteScreensEnum} from '@navigators/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';

function MainScreen() {

  log.debug('MainScreen', 'render');
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const theme = useThemes();
  const dictionaries = useAppSelector<Array<Dictionary>>(state => state.dictionary.dictionaries);

  const sections = dictionaries.map(dictionary => {
    return {
      dictionary: {...dictionary},
      themes: mockThemes.filter(themeWords => themeWords.idDictionary === dictionary.id),
    };
  });

  return (
    <View style={styles(theme).container}>
      <AccordionContainer sections={sections} />
      <MainFloatingBtnContainer
        onAddPress={() => navigation.navigate(RouteScreensEnum.DictionaryCreateScreen)}
        onUploadPress={()=>{}}
      />
    </View>);
}

export default MainScreen;
