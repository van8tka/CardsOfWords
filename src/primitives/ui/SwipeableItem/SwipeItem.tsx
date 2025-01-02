import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import {SharedValue} from 'react-native-reanimated';
import RightActionSwipe from '@primitives/ui/SwipeableItem/RightAction/RightActionSwipe';

interface ISwipeItemProps {
  children: React.ReactNode;
  onEdit: () => void;
  onDelete: () => void;
}

function SwipeItem({children, onEdit, onDelete}: ISwipeItemProps) {

  const renderRightActions = (progress: SharedValue<number>, drag: SharedValue<number>) => {
    return RightActionSwipe(progress, drag, onEdit, onDelete);
  };

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        friction={2}
        enableTrackpadTwoFingerGesture
        rightThreshold={40}
        renderRightActions={renderRightActions}>
        {children}
      </ReanimatedSwipeable>
    </GestureHandlerRootView>
  );
}

export default SwipeItem;
