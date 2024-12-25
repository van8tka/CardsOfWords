import {StyleSheet, Text, View} from 'react-native';
import log from '@utils/logger.ts';
import CustomButton from '../../primitives/ui/CustomButton/CustomButton';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MainHeaderContainer from '@components/Main/Header/MainHeaderContainer';


function MainScreen() {
  const localizedStrings = useLocalization();
  const theme = useThemes();
  const nav = useNavigation();

  log.debug('MainScreen', 'begin');

  return (
    <View style={{ flex: 1 }}>
      {/*<MainHeaderContainer />*/}
      <View style={styles.container}>
        <Text>Main Screen</Text>
      </View>
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
