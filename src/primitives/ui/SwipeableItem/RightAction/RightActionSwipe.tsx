import React from 'react';
import EditIcon from '@assets/icons/edit_icon.svg';
import DeleteIcon from '@assets/icons/delete_icon.svg';
import Reanimated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import IconButton from '@primitives/ui/IconButton/IconButton';
import styles from './styles';
import {s} from 'react-native-size-matters';

function RightActionSwipe(
  prog: SharedValue<number>,
  drag: SharedValue<number>,
  onChange: () => void,
  onDelete: () => void,
) {
  const IconDeleteSize = 26;
  const IconChangeSize = 28;
  const scaleTransformX = s(160);


  const styleAnimation = useAnimatedStyle(() => {
    return {
      transform: [{translateX: drag.value + scaleTransformX}],
    };
  });

  return (
    <Reanimated.View style={[styles.rightActionContainer, styleAnimation]}>
      <IconButton
        IconSvg={EditIcon}
        width={IconChangeSize}
        height={IconChangeSize}
        containerStyles={styles.changeAction}
        iconStyle={styles.icon}
        onPress={onChange}
      />
      <IconButton
        IconSvg={DeleteIcon}
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
