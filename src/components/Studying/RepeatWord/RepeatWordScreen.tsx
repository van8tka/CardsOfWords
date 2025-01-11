import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useThemes} from '@utils/themes/ThemeContext';
import ProgressHeader from '@components/Studying/ProgressHeader/ProgressHeader';
import log from '@utils/logger';
import CardComponent, {SwipeDirection} from '@components/Studying/ProgressHeader/Card/CardComponent';
import {useAppSelector} from '@hooks/reduxCommonHooks';
import LeftRightEditHeader from '@primitives/ui/CustomHeader/LeftRightEditHeader';

export interface IVisibleWordModel {
  text: string;
  transcription?: string;
}

// @ts-ignore
function RepeatWordScreen({route}) {
  log.debug('RepeatWordScreen', 'render');
  const idTheme = route?.params?.idTheme;
  const title = route?.params?.title || '';
  const theme = useThemes();
  const words = useAppSelector(state => state.words.words.filter(item => item.idTheme === idTheme));

  //todo kuzmuk need get from state
  const allWordsCount = words?.length ?? 0;
  const learnedWordsCount = 4;
  const unlearnedWordsCount = 3;
  const speechLanguage = 'en-US';

  const [currentIndexWord, setCurrentIndexWord] = useState(0);
  const [currentVisibleWord, setCurrentVisibleWord] = useState<IVisibleWordModel>({
    text: words[currentIndexWord]?.foreign,
    transcription: words[currentIndexWord]?.transcription,
  });
  const [showTranslation, setShowTranslation] = useState(false);

  function nextWord(index: number) {
    if(index < words.length - 1) {
      setCurrentIndexWord(index + 1);
      log.info('RepeatWordScreen', 'nextWord');
    }
  }

  function previousWord(index: number) {
    if(index > 0) {
      setCurrentIndexWord(index - 1);
      log.info('RepeatWordScreen', 'previousWord');
    }
  }

  useEffect(() => {
    if(currentIndexWord >= 0 && currentIndexWord < words.length){
      const word = words[currentIndexWord];
      log.info('RepeatWordScreen', `showTranslation: ${showTranslation}; word: ${JSON.stringify(word)}` );
      if(showTranslation){
        setCurrentVisibleWord({ text: word.translation });
      }
      else
      {
        setCurrentVisibleWord({ text: word.foreign, transcription: word.transcription });
      }
    }
  }, [showTranslation]);

  useEffect(() => {
    if(currentIndexWord >= 0 && currentIndexWord < words.length) {
      const word = words[currentIndexWord];
      log.info('RepeatWordScreen', 'currentWord:', JSON.stringify(word));
      if (showTranslation) {
        setShowTranslation(false);
        return;
      }

      setCurrentVisibleWord({text: word.foreign, transcription: word.transcription});
    }
  }, [currentIndexWord]);

  function handleSwipe(direction: SwipeDirection) {
   switch (direction) {
     case SwipeDirection.left:
     {
       nextWord(currentIndexWord);
       break;
     }
     case SwipeDirection.right:
     {
       previousWord(currentIndexWord);
       break;
     }
     default:
       setShowTranslation(!showTranslation);
       break;
   }
 }

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
        <CardComponent visibleWord={currentVisibleWord} onSwipe={handleSwipe}/>
      </View>
    </View>

  );
}

export default RepeatWordScreen;
