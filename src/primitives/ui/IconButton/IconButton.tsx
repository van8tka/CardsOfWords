import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import { vs } from 'react-native-size-matters';

interface IconButtonProps {
  onPress?: () => void;
  IconSvg: React.FC<SvgProps>;
  width?: number;
  height?: number;
}

function IconButton({onPress, IconSvg, width, height}: IconButtonProps): JSX.Element {
  const TOUCH_SIZE = 42;
  const paddingMinimalForTouch = () => {
    if (!height || height > TOUCH_SIZE) {return 0;}

  return TOUCH_SIZE - height;
  };

  return (
    <TouchableOpacity onPress={onPress} style={{ padding: vs(paddingMinimalForTouch())}}>
      <IconSvg width={width} height={height} />
    </TouchableOpacity>
  );
}

export default IconButton;
