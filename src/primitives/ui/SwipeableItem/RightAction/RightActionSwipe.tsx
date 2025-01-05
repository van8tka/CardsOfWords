import React from 'react';
import EditIconLight from '@assets/icons/light/edit_icon.svg';
import DeleteIconLight from '@assets/icons/light/delete_icon.svg';
import EditIconDark from '@assets/icons/dark/edit_icon.svg';
import DeleteIconDark from '@assets/icons/dark/delete_icon.svg';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import IconButton from '@primitives/ui/IconButton/IconButton';
import styles from './styles';
import {s} from 'react-native-size-matters';
import {useThemes} from '@utils/themes/ThemeContext';

function RightActionSwipe(
  prog: SharedValue<number>,
  drag: SharedValue<number>,
  onEdit: () => void,
  onDelete: () => void,
) {
  const IconDeleteSize = 26;
  const IconChangeSize = 28;
  const scaleTransformX = s(160);
  const theme = useThemes();

  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: drag.value + scaleTransformX}],
    };
  });

  return (
    <Reanimated.View style={[styles.rightActionContainer, styleAnimation]}>
      <IconButton
        IconSvg={theme.isDarkMode ? EditIconLight : EditIconDark}
        width={IconChangeSize}
        height={IconChangeSize}
        containerStyles={styles.changeAction}
        iconStyle={styles.icon}
        onPress={onEdit}
      />
      <IconButton
        IconSvg={theme.isDarkMode ? DeleteIconLight : DeleteIconDark}
        width={IconDeleteSize}
        height={IconDeleteSize}
        containerStyles={styles.deleteAction}
        iconStyle={styles.icon}
        onPress={onDelete}
      />
    </Reanimated.View>
  );
}

export default RightActionSwipe;
