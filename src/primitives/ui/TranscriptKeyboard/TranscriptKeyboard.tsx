import React, {StyleProp, Text, TextStyle, TouchableOpacity, View} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';
import CheckIcon from '@assets/icons/check_icon.svg';
import DelIconDark from '@assets/icons/dark/del_icon.svg';
import DelIconLight from '@assets/icons/light/del_icon.svg';
import SpaceIconDark from '@assets/icons/dark/space_icon.svg';
import SpaceIconLight from '@assets/icons/light/space_icon.svg';
import log from '@utils/logger';

interface ITranscriptKeyboard {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
}

enum KeyButton {
  Enter = '1',
  Space = '2',
  Del = '3',
}

function TranscriptKeyboard({value, onChange, onEnter}: ITranscriptKeyboard) {
  const theme = useThemes();

  const keys = [
    ['a', 'p', 'b', 't', 'd', 'k', 'g', 'f', 'v', 'θ'],
    ['s', 'z', 'ɜ', 'ʃ', 'ʒ', 'h', 'm', 'n', 'ŋ', 'l'],
    ['r', 'ɛ', 'i', 'ɪ', 'e', 'æ', 'ʌ', 'ʊ', 'u', 'ɒ'],
    ['ɔ', 'ə', 'j', 'w', 'ð', 'o', 'ː', '3'],
    ['[', ']', '2', ',', '`', '1']];

  function getStyleByValue(keyValue: string): StyleProp<TextStyle> {
    if (keyValue === KeyButton.Del || keyValue === KeyButton.Space || keyValue === KeyButton.Enter) {
      return [styles(theme).charContainer, styles(theme).button];
    }

    return styles(theme).charContainer;
  }

  function onPressKey(keyValue: string): void {
    log.info('onPressKey', keyValue);
    let newValue = value;
    switch (keyValue) {
      case KeyButton.Enter: {
        onEnter();
        return;
      }
      case KeyButton.Space: {
        newValue = newValue + ' ';
        break;
      }
      case KeyButton.Del: {
        if (newValue && newValue.length > 0) {
          newValue = newValue.slice(0, -1);
        }
        break;
      }
      default: {
        newValue = newValue + keyValue;
        break;
      }
    }
    onChange(newValue);
  }

  function renderKeyChar(keyValue: string) {
    switch (keyValue) {
      case KeyButton.Enter: {
        return <CheckIcon
          width={32}
          height={32}
          stroke={theme.iconStrokeColor}
          style={styles(theme).icon}
        />;
      }
      case KeyButton.Space: {
       return theme.isDarkMode ?
         (<SpaceIconLight
            width={40}
            height={40}
            style={styles(theme).icon}
          />) :
         (<SpaceIconDark
           width={40}
           height={40}
           style={styles(theme).icon}
         />);
      }
      case KeyButton.Del: {
        return theme.isDarkMode ?
          (<DelIconLight
          width={28}
          height={28}
          style={styles(theme).icon}
        />) :
          (<DelIconDark
            width={28}
            height={28}
            style={styles(theme).icon}
          />);
      }
      default: {
        return <Text style={styles(theme).charTitle}>{keyValue}</Text>;
      }
    }
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
                    {renderKeyChar(keyValue)}
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
