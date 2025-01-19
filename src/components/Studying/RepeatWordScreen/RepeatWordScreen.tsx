import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {useThemes} from '@utils/themes/ThemeContext';
import ProgressHeader from '@components/Studying/ProgressHeaderComponent/ProgressHeader';
import log from '@utils/logger';
import CardComponent, {SwipeDirection} from '@components/Studying/CardComponent/CardComponent';
import {useAppDispatch, useAppSelector} from '@hooks/reduxCommonHooks';
import LeftRightEditHeader from '@primitives/ui/CustomHeader/LeftRightEditHeader';
import {updateWord} from '@redux/slices/wordSlice';
import Tts from 'react-native-tts';
import {appStyles} from '../../../../App.styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import {RouteScreensEnum} from '@navigators/screens';

export interface IVisibleWordModel {
  text: string;
  transcription?: string;
}

// @ts-ignore
function RepeatWordScreen({route}) {
  log.debug('RepeatWordScreen', 'render');
  const idTheme = route?.params?.idTheme;
  const title = route?.params?.title || '';

  const navigator = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const theme = useThemes();
  const dispatch = useAppDispatch();

  const speechLanguage = useAppSelector(state => state.app.voiceLanguage);
  const words = useAppSelector(state => state.words.words.filter(item => item.idTheme === idTheme));

  const allWordsCount = words?.length ?? 0;
  const learnedWordsCount = words?.filter(item => item.isLearned)?.length ?? 0;
  const unlearnedWordsCount = allWordsCount - learnedWordsCount;

  useEffect(() => {
    Tts.setDefaultLanguage(speechLanguage?.language || 'en-US');
  }, []);

  const [currentIndexWord, setCurrentIndexWord] = useState(0);
  const [currentVisibleWord, setCurrentVisibleWord] = useState<IVisibleWordModel>({
    text: words[currentIndexWord]?.foreign,
    transcription: words[currentIndexWord]?.transcription,
  });
  const [showTranslation, setShowTranslation] = useState(false);
  let unlearnedIndex: number[] = [];


  function nextWord(index: number) {
    if(index < words.length - 1) {
      setCurrentIndexWord(index + 1);
      log.info('RepeatWordScreen', 'nextWord');
      if(!unlearnedIndex.includes(index)) {
        dispatch(updateWord({...words[index], isLearned: true}));
      }
    }
  }

  function previousWord(index: number) {
    if(index > 0) {
      setCurrentIndexWord(index - 1);
      log.info('RepeatWordScreen', 'previousWord');
    }
  }

  function onSpeechWord(){
    if(isAvailableWord) {
      Tts.speak(words[currentIndexWord]?.foreign);
    }
  }

  useEffect(() => {
    if(isAvailableWord){
      const word = words[currentIndexWord];
      log.info('RepeatWordScreen', `showTranslation: ${showTranslation}; word: ${JSON.stringify(word)}` );
      if(showTranslation){
        setCurrentVisibleWord({ text: word.translation });
        dispatch(updateWord({...word, isLearned: false}));
        unlearnedIndex.push(currentIndexWord);
      }
      else
      {
        setCurrentVisibleWord({ text: word.foreign, transcription: word.transcription });
      }
    }
  }, [showTranslation]);

  useEffect(() => {
    if(isAvailableWord) {
      const word = words[currentIndexWord];
      log.info('RepeatWordScreen', 'currentWord:', JSON.stringify(word));
      if (showTranslation) {
        setShowTranslation(false);
        return;
      }

      setCurrentVisibleWord({text: word.foreign, transcription: word.transcription});
    }
  }, [currentIndexWord]);

  const isAvailableWord = currentIndexWord >= 0 && currentIndexWord < words.length;

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

 function onNavigateToEditWord(){
   navigator.navigate(RouteScreensEnum.WordEditScreen, {word: words[currentIndexWord]});
 }

  return  (
    <View style={appStyles(theme).screenContainer}>
      <LeftRightEditHeader title={title} onPressRight={onNavigateToEditWord}/>
      <View style={styles(theme).body}>
        <ProgressHeader
          allWords={allWordsCount}
          learnedWords={learnedWordsCount}
          unlearnedWords={unlearnedWordsCount}
          speechLanguage={speechLanguage?.language || 'en-US'}
          onSpeech={onSpeechWord}
        />
        <CardComponent visibleWord={currentVisibleWord} onSwipe={handleSwipe}/>
      </View>
    </View>

  );
}

export default RepeatWordScreen;
