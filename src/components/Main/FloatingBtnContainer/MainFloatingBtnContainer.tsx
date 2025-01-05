import {View} from 'react-native';
import IconButton from '../../../primitives/ui/IconButton/IconButton';
import AddIconLight from '@assets/icons/light/add_icon.svg';
import AddIconDark from '@assets/icons/dark/add_icon.svg';
import UploadCloudIconLight from '@assets/icons/light/upload_cloud_icon.svg';
import UploadCloudIconDark from '@assets/icons/dark/upload_cloud_icon.svg';
import React from 'react';
import {styles} from '@components/Main/FloatingBtnContainer/styles';
import {ITheme} from '@utils/themes/ITheme';

interface FloatingBtnContainerProps {
  onAddPress: () => void;
  onUploadPress: () => void;
  theme: ITheme;
}

function MainFloatingBtnContainer({onAddPress, onUploadPress, theme}: FloatingBtnContainerProps) {
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
        IconSvg={theme.isDarkMode ? UploadCloudIconLight : UploadCloudIconDark}
        onPress={onUploadPress}
        width={48}
        height={48}
      />
    </View>
  );
}

export default MainFloatingBtnContainer;
