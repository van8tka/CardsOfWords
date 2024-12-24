import {View} from 'react-native';
import log from '@utils/logger.ts';
import Button from '../../primitives/ui/Button/Button';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import {AppStackNavScreens} from '../../navigators/screens';
import React from 'react';


function MainScreen() {
  const localizedStrings = useLocalization();
  const theme = useThemes();
  const nav = useNavigation();

  log.debug('MainScreen', 'begin');

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff', width: 200, height: 300 }}>
     <Button
       titleStyle={{color: theme.textSecondaryColor}}
       containerStyle={{backgroundColor: theme.primaryColor}}
       onPress={()=>{
         nav.navigate(AppStackNavScreens.SettingsScreen as never);
         }}
       title={localizedStrings.pushMe}
     />
  </View>);
}

export default MainScreen;
