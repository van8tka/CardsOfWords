import {View} from 'react-native';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';
import CountWordsComponent from '@components/Studying/ProgressHeaderComponent/CountWords/CountWordsComponent';
import SpeechButton from '@components/Studying/ProgressHeaderComponent/SpeechButton/SpeechButton';

interface IProgressHeaderProps {
  allWords: number,
  learnedWords: number,
  unlearnedWords: number,
  speechLanguage: string,
  onSpeech: () => void,
}

function ProgressHeader({allWords, learnedWords, unlearnedWords, speechLanguage, onSpeech}: IProgressHeaderProps) {
  const theme = useThemes();

  return (
    <View style={styles(theme).container}>
      <CountWordsComponent allWords={allWords} learnedWords={learnedWords} unlearnedWords={unlearnedWords} />
      <SpeechButton speechLanguage={speechLanguage} onPress={onSpeech}/>
    </View>
  );
}

export default ProgressHeader;
