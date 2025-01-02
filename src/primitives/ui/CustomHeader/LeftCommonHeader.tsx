import CustomHeader from '@primitives/ui/CustomHeader/CustomHeader';
import LeftBackIcon from '@assets/icons/left_back_icon.svg';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

interface LeftCommonHeaderProps {
  title: string;
}

function LeftCommonHeader({title}: LeftCommonHeaderProps) {

const navigation = useNavigation();

return <CustomHeader
  title={title}
  onPressLeft={() => navigation.goBack()}
  leftBtnIcon={LeftBackIcon}
/>;
}

export default LeftCommonHeader;

