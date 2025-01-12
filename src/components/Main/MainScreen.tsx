import {View} from 'react-native';
import log from '@utils/logger.ts';
import React from 'react';
import MainFloatingBtnContainer from '@components/Main/FloatingBtnContainer/MainFloatingBtnContainer';
import AccordionContainer from '@components/Main/AccordionContainer/AccordionContainer';
import {useThemes} from '@utils/themes/ThemeContext';
import {useAppSelector} from '@hooks/reduxCommonHooks';
import Dictionary from '@models/Dictionary';
import {useNavigation} from '@react-navigation/native';
import {RouteScreensEnum} from '@navigators/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import ThemeOfWords from '@models/ThemeOfWords';
import {appStyles} from '../../../App.styles';

function MainScreen() {

  log.debug('MainScreen', 'render');
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const theme = useThemes();
  const dictionaries = useAppSelector<Array<Dictionary>>(state => state.dictionary.dictionaries);
  const themesOfWords = useAppSelector<Array<ThemeOfWords>>(state => state.themeOfWords.themes);
  const sections = dictionaries.map(dictionary => {
    return {
      dictionary: {...dictionary},
      themes: themesOfWords.filter(themeWords => themeWords.idDictionary === dictionary.id),
    };
  });

  return (
    <View style={appStyles(theme).screenContainer}>
      <AccordionContainer sections={sections} />
      <MainFloatingBtnContainer
        theme={theme}
        onAddPress={() => navigation.navigate(RouteScreensEnum.DictionaryCreateScreen)}
        onUploadPress={()=>{}}
      />
    </View>);
}

export default MainScreen;
