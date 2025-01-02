import React, {useRef} from 'react';
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

  const swipeableRef = useRef(null);

  const renderRightActions = (progress: SharedValue<number>, drag: SharedValue<number>) => {
    return RightActionSwipe(
      progress,
      drag,
      () => { onEdit(); // @ts-ignore
        swipeableRef?.current?.close(); },
      ()=>{ onDelete();  // @ts-ignore
        swipeableRef?.current?.close(); },
    );
  };

  return (
    <GestureHandlerRootView>
      <ReanimatedSwipeable
        ref = {swipeableRef}
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
