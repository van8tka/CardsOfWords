import CustomHeader from '@primitives/ui/CustomHeader/CustomHeader';
import LeftBackIcon from '@assets/icons/left_back_icon.svg';
import CheckIcon from '@assets/icons/check_icon.svg';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface LeftRightSuccessHeaderProps {
  title: string;
  onPressRight: () => void;
}

function LeftRightSuccessHeader({title, onPressRight}: LeftRightSuccessHeaderProps) {

  const navigation = useNavigation();

  return <CustomHeader
    title={title}
    onPressLeft={() => navigation.goBack()}
    leftBtnIcon={LeftBackIcon}
    rightBtnIcon={CheckIcon}
    onPressRight={onPressRight}
  />;
}

export default LeftRightSuccessHeader;

