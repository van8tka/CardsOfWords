import React from 'react';
import { View, Text } from 'react-native';
import {styles} from './styles';
import {useThemes} from '@utils/themes/ThemeContext';
import IconButton from '../IconButton/IconButton';
import {SvgProps} from 'react-native-svg';

interface ICustomHeaderProps {
  title?: string;
  leftBtnIcon?: React.FC<SvgProps>;
  rightBtnIcon?: React.FC<SvgProps>;
  onPressLeft?: () => void;
  onPressRight?: () => void;
}

const CustomHeader = ({
                        title,
                        leftBtnIcon,
                        rightBtnIcon,
                        onPressLeft,
                        onPressRight }: ICustomHeaderProps) => {
  const theme = useThemes();
  return (
    <View style={styles(theme).header}>
      {leftBtnIcon && <IconButton IconSvg={leftBtnIcon} onPress={onPressLeft} height={28} width={32}/>}
      <Text style={styles(theme).title}>{title || ''}</Text>
      {rightBtnIcon && <IconButton IconSvg={rightBtnIcon} onPress={onPressRight} height={32} width={32}/>}
    </View>
  );
};

export default CustomHeader;
