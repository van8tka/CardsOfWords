import {Text, View} from 'react-native';
import IconButton from '@primitives/ui/IconButton/IconButton';
import SpeechIconLight from '@assets/icons/light/speech_icon.svg';
import SpeechIconDark from '@assets/icons/dark/speech_icon.svg';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface ISpeechButtonProps {
  speechLanguage: string;
  onPress: () => void;
}

function SpeechButton({speechLanguage, onPress}: ISpeechButtonProps){
  const theme = useThemes();
  return (
    <View style={styles(theme).container}>
      <IconButton onPress={onPress} IconSvg={theme.isDarkMode ? SpeechIconLight : SpeechIconDark} height={64} width={64}/>
      <Text style={styles(theme).title}>{speechLanguage}</Text>
    </View>
  );
}

export default SpeechButton;
