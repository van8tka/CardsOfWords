
import {View} from 'react-native';

import React from 'react';
import log from '@utils/logger.ts';
import Button from '../../primitives/ui/Button/Button';


function MainContainer() {
  log.debug('MainContainer', 'begin');
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
     <Button
       onPress={()=>{log.debug('onPress hrr');}}
       title={'Push me'}
     />
  </View>);
}

export default MainContainer;
