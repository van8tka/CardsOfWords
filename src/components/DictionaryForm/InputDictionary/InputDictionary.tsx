import styles from '@components/DictionaryForm/InputDictionary/styles';
import {TextInput, View} from 'react-native';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';

interface IInputDictionaryProps {
  text?: string;
  setText: (text: string) => void;
  placeholder?: string;
}

function InputDictionary({text, setText, placeholder}: IInputDictionaryProps): JSX.Element {

  const theme = useThemes();

  return(
    <View style={styles(theme).container}>
      <TextInput
        style={styles(theme).input}
        onChangeText={(value)=> setText(value)}
        value={text}
        placeholder={placeholder}
        maxLength={120}
      />
    </View>
);
}

export default InputDictionary;
