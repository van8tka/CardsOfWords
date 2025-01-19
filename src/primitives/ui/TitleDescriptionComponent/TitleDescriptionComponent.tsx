import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface ITitleDescriptionComponent {
  title: string;
  description: string;
  rightText?: string;
  onClick: () => void;
}

function TitleDescriptionComponent({title, description, rightText, onClick }: ITitleDescriptionComponent) {
  const theme = useThemes();

  return (
    <View style={styles(theme).container}>
    <TouchableOpacity style={styles(theme).touchContainer} onPress={onClick}>
      <View>
        <Text style={styles(theme).header}>{title}</Text>
        <Text style={styles(theme).description}>{description}</Text>
      </View>
      <Text style={styles(theme).rightText}>{rightText}</Text>
    </TouchableOpacity>
    </View>
  );
}

export default TitleDescriptionComponent;
