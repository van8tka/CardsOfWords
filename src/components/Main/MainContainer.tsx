
import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import log from '@utils/logger.ts';




function MainContainer() {
  log.debug('MainContainer', 'begin');
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', alignContent: 'center'}}>
      <TouchableOpacity onPress={()=> {
        log.error(new Error('[error] MainContainer'));
      }}>
        <View style={{backgroundColor: '#ff000055', padding: 20}}>
          <Text>{'Push me'}</Text>
        </View>
      </TouchableOpacity>
  </View>)
}

export default MainContainer;
