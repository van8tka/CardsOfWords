import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import CustomButton from '@primitives/ui/CustomButton/CustomButton';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface IButtonProps {
  onPress?: () => void;
  title?: string;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

function PrimaryButton({onPress,title, containerStyle, titleStyle} : IButtonProps) {
  const theme = useThemes();

  return <CustomButton
    onPress={onPress}
    title={title}
    containerStyle={[styles(theme).button, containerStyle]}
    titleStyle={[styles(theme).title,titleStyle]} />;
}

export default PrimaryButton;
