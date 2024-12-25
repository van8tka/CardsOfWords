import {StyleSheet, Text, View} from 'react-native';
import log from '@utils/logger.ts';
import React from 'react';
import MainFloatingBtnContainer from '@components/Main/FloatingBtnContainer/MainFloatingBtnContainer';

function MainScreen() {

  log.debug('MainScreen', 'begin');

  return (
    <View style={{ flex: 1 }}>
      {/*<MainHeaderContainer />*/}
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
      <MainFloatingBtnContainer onAddPress={()=>{}} onUploadPress={()=>{}}/>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
