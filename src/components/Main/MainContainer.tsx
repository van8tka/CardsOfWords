
import {View} from 'react-native';

import React from 'react';
import log from '@utils/logger.ts';
import Button from '../../primitives/ui/Button/Button';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';


function MainContainer() {
  const localizedStrings = useLocalization();
  const theme = useThemes();

  log.debug('MainContainer', 'begin');
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
     <Button
       titleStyle={{color: theme.textPrimaryColor}}
       containerStyle={{backgroundColor: theme.primaryColor}}
       onPress={()=>{log.debug(localizedStrings.onPress);}}
       title={localizedStrings.pushMe}
     />
  </View>);
}

export default MainContainer;
