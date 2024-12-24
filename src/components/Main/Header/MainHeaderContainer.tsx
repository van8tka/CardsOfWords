import React from 'react';
import {View, Text } from 'react-native';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {styles} from '@components/Main/Header/styles';
import {useThemes} from '@utils/themes/ThemeContext';
import IconButton from '../../../primitives/ui/IconButton/IconButton';
import Gear from '@assets/icons/gear.svg';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavScreens} from '../../../navigators/screens';


const MainHeaderContainer = () => {

  const localizeStr = useLocalization();
  const theme = useThemes();
  const navigation = useNavigation();

  const onPressSettings = () => {
    navigation.navigate(AppStackNavScreens.SettingsScreen as never);
  };



  return (
    <View style={styles(theme).header}>
      <Text style={styles(theme).title}>{localizeStr.appName}</Text>
       <IconButton IconSvg={Gear} onPress={onPressSettings} height={24} width={24} />

      //todo kuzmuk need implement it
      {/*<IconButton IconSvg={GearIcon} onPress={()=>{}} />*/}
      {/*<IconButton IconSvg={GearIcon} onPress={()=>{}} />*/}
    </View>
  );
};

export default MainHeaderContainer;
