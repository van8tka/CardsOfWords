import { View} from 'react-native';
import log from '@utils/logger.ts';
import React from 'react';
import MainFloatingBtnContainer from '@components/Main/FloatingBtnContainer/MainFloatingBtnContainer';
import AccordionContainer from '@components/Main/AccordionContainer/AccordionContainer';
import styles from '@components/Main/styles';
import {useThemes} from '@utils/themes/ThemeContext';
import {mockDictionary, mockThemes} from '../../mock';

function MainScreen() {

  log.debug('MainScreen', 'render');

  const theme = useThemes();

  const sections = mockDictionary.map(dictionary => {
    return {
      dictionary: {...dictionary},
      themes: mockThemes.filter(themeWords => themeWords.idDictionary === dictionary.id),
    };
  });

  return (
    <View style={styles(theme).container}>
      <AccordionContainer sections={sections} />
      <MainFloatingBtnContainer onAddPress={()=>{}} onUploadPress={()=>{}}/>
    </View>);
}


export default MainScreen;
