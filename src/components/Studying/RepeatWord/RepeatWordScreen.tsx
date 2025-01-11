import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useThemes} from '@utils/themes/ThemeContext';
import ProgressHeader from '@components/Studying/ProgressHeader/ProgressHeader';
import log from '@utils/logger';
import CardComponent from '@components/Studying/ProgressHeader/Card/CardComponent';
import {useAppSelector} from '@hooks/reduxCommonHooks';
import LeftRightEditHeader from '@primitives/ui/CustomHeader/LeftRightEditHeader';

// @ts-ignore
function RepeatWordScreen({route}) {
  log.debug('RepeatWordScreen', 'render');
  console.log('++++ route ', route);
  const idTheme = route?.params?.idTheme;
  const title = route?.params?.title || '';
  const theme = useThemes();
  const words = useAppSelector(state => state.words.words.filter(item => item.idTheme === idTheme));

  //todo kuzmuk need get from state
  const allWordsCount = 10;
  const learnedWordsCount = 4;
  const unlearnedWordsCount = 3;
  const speechLanguage = 'en-US';

  return  (
    <View style={styles(theme).container}>
      <LeftRightEditHeader title={title} onPressRight={()=>{}}/>
      <View style={styles(theme).body}>
        <ProgressHeader
          allWords={allWordsCount}
          learnedWords={learnedWordsCount}
          unlearnedWords={unlearnedWordsCount}
          speechLanguage={speechLanguage}
          onSpeech={()=> console.log('+++++ SPEACH PRESS')}
        />
        <CardComponent word={words[0]}/>
      </View>
    </View>

  );
}

export default RepeatWordScreen;
