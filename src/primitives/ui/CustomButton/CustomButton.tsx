import {StyleProp, Text, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import React from 'react';

interface IButtonProps {
  onPress?: () => void;
  onLongPress?: () => void;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

function CustomButton({onPress,onLongPress,title, containerStyle, titleStyle} : IButtonProps) {
  return <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
    <View style={[containerStyle, {justifyContent: 'center'}]}>
      <Text style={titleStyle}>{title}</Text>
    </View>
  </TouchableOpacity>;
}

export default CustomButton;
