import {DrawerActions, useNavigation} from '@react-navigation/native';
import CustomHeader from '@primitives/ui/CustomHeader/CustomHeader';
import MenuIcon from '@assets/icons/menu_icon.svg';
import React from 'react';

interface DrawerCustomHeaderProps {
  title: string;
}

function DrawerCustomHeader({title}: DrawerCustomHeaderProps) {
  const navigation = useNavigation();

  return <CustomHeader
    title={title}
    onPressLeft={() => navigation.dispatch(DrawerActions.openDrawer())}
    leftBtnIcon={MenuIcon}
  />;
}

export default DrawerCustomHeader;
