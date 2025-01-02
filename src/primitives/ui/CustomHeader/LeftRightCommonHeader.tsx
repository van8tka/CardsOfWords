import CustomHeader from '@primitives/ui/CustomHeader/CustomHeader';
import LeftBackIcon from '@assets/icons/left_back_icon.svg';
import CheckIcon from '@assets/icons/check_icon.svg';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface LeftRightCommonHeaderProps {
  title: string;
  onPressRight: () => void;
}

function LeftRightCommonHeader({title, onPressRight}: LeftRightCommonHeaderProps) {

  const navigation = useNavigation();

  return <CustomHeader
    title={title}
    onPressLeft={() => navigation.goBack()}
    leftBtnIcon={LeftBackIcon}
    rightBtnIcon={CheckIcon}
    onPressRight={onPressRight}
  />;
}

export default LeftRightCommonHeader;

