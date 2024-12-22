
import {View} from 'react-native';

import React from 'react';
import log from '@utils/logger.ts';
import Button from '../../primitives/ui/Button/Button';
import {useLocalization} from '@utils/localization/LocalizationContext';


function MainContainer() {
  const localizedStrings = useLocalization();
  log.debug('MainContainer', 'begin');
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
     <Button
       onPress={()=>{log.debug(localizedStrings.onPress);}}
       title={localizedStrings.pushMe}
     />
  </View>);
}

export default MainContainer;
