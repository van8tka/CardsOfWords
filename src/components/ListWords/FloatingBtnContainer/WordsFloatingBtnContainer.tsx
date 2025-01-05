import {View} from 'react-native';
import IconButton from '../../../primitives/ui/IconButton/IconButton';
import AddIconLight from '@assets/icons/light/add_icon.svg';
import ImportIconLight from '@assets/icons/light/import_icon.svg';
import StudyingIconLight from '@assets/icons/light/studying_icon.svg';
import React from 'react';
import {styles} from '@components/Main/FloatingBtnContainer/styles';
import AddIconDark from '@assets/icons/dark/add_icon.svg';
import ImportIconDark from '@assets/icons/dark/import_icon.svg';
import StudyingIconDark from '@assets/icons/dark/studying_icon.svg';
import {ITheme} from '@utils/themes/ITheme';

interface FloatingBtnContainerProps {
  onAddPress: () => void;
  onStudyingPress: () => void;
  onImportPress: () => void;
  theme: ITheme;
}

function WordsFloatingBtnContainer({theme, onAddPress, onStudyingPress, onImportPress}: FloatingBtnContainerProps) {
  return (
    <View style={styles.floatBtnContainer}>
      <IconButton
        IconSvg={theme.isDarkMode ? AddIconLight : AddIconDark}
        width={48}
        height={48}
        onPress={onAddPress}
        containerStyles={styles.addBtn}
      />
      <IconButton
        IconSvg={theme.isDarkMode ? ImportIconLight : ImportIconDark}
        onPress={onImportPress}
        width={48}
        height={48}
        containerStyles={styles.addBtn}
      />
      <IconButton
        IconSvg={theme.isDarkMode ? StudyingIconLight : StudyingIconDark}
        onPress={onStudyingPress}
        width={48}
        height={48}
      />
    </View>
  );
}

export default WordsFloatingBtnContainer;
