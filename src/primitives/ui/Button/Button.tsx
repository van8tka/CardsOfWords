import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface IButtonProps {
  onPress?: () => void;
  onLongPress?: () => void;
  title?: string;
}

function Button({onPress,onLongPress,title} : IButtonProps) {
  return <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
    <View style={{backgroundColor: '#ff000055', padding: 20}}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>;
}

export default Button;
