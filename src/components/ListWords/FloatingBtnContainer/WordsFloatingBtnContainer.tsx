import {View} from 'react-native';
import IconButton from '../../../primitives/ui/IconButton/IconButton';
import AddIcon from '@assets/icons/add_icon.svg';
import ImportIcon from '@assets/icons/import_icon.svg';
import StudyingIcon from '@assets/icons/studying_icon.svg';
import React from 'react';
import {styles} from '@components/Main/FloatingBtnContainer/styles';

interface FloatingBtnContainerProps {
  onAddPress: () => void;
  onStudyingPress: () => void;
  onImportPress: () => void;
}

function WordsFloatingBtnContainer({onAddPress, onStudyingPress, onImportPress}: FloatingBtnContainerProps) {
  return (
    <View style={styles.floatBtnContainer}>
      <IconButton
        IconSvg={AddIcon}
        width={48}
        height={48}
        onPress={onAddPress}
        containerStyles={styles.addBtn}
      />
      <IconButton
        IconSvg={ImportIcon}
        onPress={onImportPress}
        width={48}
        height={48}
        containerStyles={styles.addBtn}
      />
      <IconButton
        IconSvg={StudyingIcon}
        onPress={onStudyingPress}
        width={48}
        height={48}
      />
    </View>
  );
}

export default WordsFloatingBtnContainer;
