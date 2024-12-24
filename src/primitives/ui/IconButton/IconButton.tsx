import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';

interface IconButtonProps {
  onPress?: () => void;
  IconSvg: React.FC<SvgProps>;
  width?: number;
  height?: number;
}

function IconButton({onPress, IconSvg, width, height}: IconButtonProps): JSX.Element {
  return (
    <TouchableOpacity onPress={onPress}>
      <IconSvg width={width} height={height} />
    </TouchableOpacity>
  );
}

export default IconButton;
