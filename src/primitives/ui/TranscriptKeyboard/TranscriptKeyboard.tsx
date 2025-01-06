import React, {StyleProp, Text, TextStyle, TouchableOpacity, View} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

function TranscriptKeyboard(){
  const theme = useThemes();

  const keys = [
    ['a','p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 'θ'],
    ['s', 'z','ɜ', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l'],
    ['r', 'ɛ', 'i', 'ɪ', 'e', 'æ', 'ʌ', 'ʊ', 'u', 'ɒ'],
    ['ɔ', 'ə','j','w', 'ð', 'o', 'ː', 'Del'],
    ['[', ']', 'Space', ',','`', 'Enter']];

  function getStyleByValue(keyValue: string): StyleProp<TextStyle> {
    if(keyValue === 'Del' || keyValue === 'Space' || keyValue === 'Enter') {
      return [styles(theme).charContainer, styles(theme).button];
    }

    return styles(theme).charContainer;
  }

  return (
    <View style={styles(theme).container}>
      {keys.map((key, index) => {
          return (
            <View key={index} style={styles(theme).row}>
              {key.map((value)=> {
                return (
                  <TouchableOpacity key={value} style={getStyleByValue(value)}>
                    <Text style={styles(theme).charTitle}>{value}</Text>
                  </TouchableOpacity>
                );
              })}
          </View>);
        }
      )}
    </View>
  );
}

export default TranscriptKeyboard;
