import {Text, View} from 'react-native';
import React from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import styles, {CARD_WIDTH} from './styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring, runOnJS,
} from 'react-native-reanimated';
import {IVisibleWordModel} from '@components/Studying/RepeatWord/RepeatWordScreen';

export enum SwipeDirection {
  left,
  right,
  up,
  down,
}

interface ICardComponentProps {
  visibleWord: IVisibleWordModel,
  onSwipe: (direction: SwipeDirection) => void,
}

function CardComponent({visibleWord, onSwipe}: ICardComponentProps) {
  const theme = useThemes();

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const scale = useSharedValue(1);
  const opacity = useSharedValue(1);
  const rotateX = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;

      scale.value = 1 - Math.abs(event.translationX) / CARD_WIDTH * 0.9; // Уменьшаем до 30%
      scale.value = Math.max(scale.value, 0); // Ограничиваем минимальный масштаб
    })
    .onEnd((event) => {
      const { translationX, translationY } = event;

      if (Math.abs(translationX) > Math.abs(translationY)) {
        opacity.value = withSpring(0, { duration: 200 }); // Скрываем карточку
        if (translationX < -50) {
          runOnJS(onSwipe)(SwipeDirection.left);
        } else if (translationX > 50) {
          runOnJS(onSwipe)(SwipeDirection.right);
        }
        // Появление карточки в центре
        translateX.value = 0;
        scale.value = 0;
        opacity.value = 1;
        scale.value = withSpring(1, { duration: 1200 });
      } else {

         if (translationY < -50) {
            rotateX.value = withSpring(rotateX.value + 180, { duration: 3500 });
            runOnJS(onSwipe)(SwipeDirection.up);
          } else if (translationY > 50) {
            rotateX.value = withSpring(rotateX.value - 180, { duration: 3500 });
            runOnJS(onSwipe)(SwipeDirection.down);
          }
          // Возвращаем на место
          translateX.value = withSpring(0);
          translateY.value = withSpring(0);
          scale.value = withSpring(1);
          opacity.value = withSpring(1);
      }
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { scale: scale.value },
        { rotateX: `${rotateX.value}deg` },
      ],
      opacity: opacity.value,
    };
  });

  const textCancelAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateX: `${-rotateX.value}deg` },
      ],
    };
  });

  return (
    <View style={styles(theme).container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles(theme).card, animatedStyle]}>
          <Animated.View style={textCancelAnimationStyle}>
          <Text style={styles(theme).text}>{visibleWord.text || ''}</Text>
          {visibleWord.transcription && <Text style={styles(theme).text}>{visibleWord.transcription}</Text>}
            </Animated.View>
          </Animated.View>
      </GestureDetector>
    </View>
  );
}

export default CardComponent;
