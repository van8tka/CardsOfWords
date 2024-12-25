import React from 'react';
import {View, Text } from 'react-native';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {styles} from '@components/Main/Header/styles';
import {useThemes} from '@utils/themes/ThemeContext';
import IconButton from '../../../primitives/ui/IconButton/IconButton';
import GearIcon from '@assets/icons/gear_icon.svg';
import {useNavigation} from '@react-navigation/native';
import {RouteScreensEnum} from '../../../navigators/screens';
import HeartIcon from '@assets/icons/heart_icon.svg';
import QuestionIcon from '@assets/icons/question_icon.svg';


const MainHeaderContainer = () => {

  const localizeStr = useLocalization();
  const theme = useThemes();
  const navigation = useNavigation();

  const onPressSettings = () => {
    navigation.navigate(RouteScreensEnum.SettingsScreen as never);
  };


  //todo kuzmuk need implement it
  return (
    <View style={styles(theme).header}>
      <Text style={styles(theme).title}>{localizeStr.appName}</Text>
      <IconButton IconSvg={GearIcon} onPress={onPressSettings} height={24} width={24} />
      <IconButton IconSvg={HeartIcon} onPress={()=>{} } height={28} width={28}  />
      <IconButton IconSvg={QuestionIcon} onPress={()=>{}} height={28} width={28}  />
    </View>
  );
};

export default MainHeaderContainer;
