import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface ITitleDescriptionComponent {
  title: string;
  description: string;
  onClick: () => void;
}

function TitleDescriptionComponent({title, description,  onClick }: ITitleDescriptionComponent) {
  const theme = useThemes();

  return (
    <View style={styles(theme).container}>
    <TouchableOpacity onPress={onClick}>
      <Text style={styles(theme).header}>{title}</Text>
      <Text style={styles(theme).description}>{description}</Text>
    </TouchableOpacity>
    </View>
  );
}

export default TitleDescriptionComponent;
