import {View} from 'react-native';
import IconButton from '../../../primitives/ui/IconButton/IconButton';
import AddIcon from '@assets/icons/add_icon.svg';
import UploadCloudIcon from '@assets/icons/upload_cloud_icon.svg';
import React from 'react';
import {styles} from '@components/Main/FloatingBtnContainer/styles';

interface FloatingBtnContainerProps {
  onAddPress: () => void;
  onUploadPress: () => void;
}

function MainFloatingBtnContainer({onAddPress, onUploadPress}: FloatingBtnContainerProps) {
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
        IconSvg={UploadCloudIcon}
        onPress={onUploadPress}
        width={48}
        height={48}
      />
    </View>
  );
}

export default MainFloatingBtnContainer;
