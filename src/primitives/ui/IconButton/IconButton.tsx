import {StyleProp, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import { vs } from 'react-native-size-matters';

interface IconButtonProps {
  onPress?: () => void;
  IconSvg: React.FC<SvgProps>;
  width?: number;
  height?: number;
  containerStyles?: StyleProp<ViewStyle>
  iconStyle?: StyleProp<ViewStyle>;
  strokeColor?: string;
}

function IconButton({strokeColor, onPress, IconSvg, width, height, containerStyles, iconStyle}: IconButtonProps): JSX.Element {
  const MIN_TOUCH_SIZE = 42;
  const paddingMinimalForTouch = () => {
    if (!height || height > MIN_TOUCH_SIZE) {return 0;}

  return MIN_TOUCH_SIZE - height;
  };

  return (
    <TouchableOpacity onPress={onPress} style={[containerStyles,{ padding: vs(paddingMinimalForTouch())}]}>
      <IconSvg
        stroke={strokeColor}
        width={width}
        height={height}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
}

export default IconButton;
