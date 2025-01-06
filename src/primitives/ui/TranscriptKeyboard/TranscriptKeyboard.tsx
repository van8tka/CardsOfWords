import React, {StyleProp, Text, TextStyle, TouchableOpacity, View} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface ITranscriptKeyboard {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
}


function TranscriptKeyboard({value, onChange, onEnter}: ITranscriptKeyboard) {
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

  function onPressKey(keyValue: string): void {
    let newValue = value;
    switch (keyValue) {
      case 'Enter': {
        onEnter();
        return;
      }
      case 'Del':{
        if(newValue && newValue.length > 0){
          newValue = newValue.slice(0, -1);
        }
        break;
      }
      case 'Space':{
        newValue = newValue + ' ';
        break;
      }
      default: {
        newValue = newValue + keyValue;
        break;
      }
    }
    onChange(newValue);
  }

  return (
    <View style={styles(theme).container}>
      {keys.map((key, index) => {
          return (
            <View key={index} style={styles(theme).row}>
              {key.map((keyValue)=> {
                return (
                  <TouchableOpacity
                    key={keyValue}
                    style={getStyleByValue(keyValue)}
                    onPress={()=>onPressKey(keyValue)}
                  >
                    <Text style={styles(theme).charTitle}>{keyValue}</Text>
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
