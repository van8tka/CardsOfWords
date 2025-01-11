import CustomHeader from '@primitives/ui/CustomHeader/CustomHeader';
import LeftBackIcon from '@assets/icons/left_back_icon.svg';
import EditIconLight from '@assets/icons/light/edit_icon.svg';
import EditIconDark from '@assets/icons/dark/edit_icon.svg';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useThemes} from '@utils/themes/ThemeContext';

interface LeftRightEditHeaderProps {
  title: string;
  onPressRight: () => void;
}

function LeftRightEditHeader({title, onPressRight}: LeftRightEditHeaderProps) {
  const theme = useThemes();
  const navigation = useNavigation();

  return <CustomHeader
    title={title}
    onPressLeft={() => navigation.goBack()}
    leftBtnIcon={LeftBackIcon}
    rightBtnIcon={theme.isDarkMode ? EditIconLight : EditIconDark}
    onPressRight={onPressRight}
  />;
}

export default LeftRightEditHeader;

