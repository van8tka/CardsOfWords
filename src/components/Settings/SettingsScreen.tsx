import {View} from 'react-native';
import React from 'react';
import {appStyles} from '../../../App.styles';
import {useThemes} from '@utils/themes/ThemeContext';
import SwitchComponent from '@primitives/ui/SwitchComponent/SwitchComponent';
import styles from './styles';

function SettingsScreen() {
  const theme = useThemes();
  return (
    <View style={[appStyles(theme).screenContainer, styles.container]}>
      <SwitchComponent
        title={'Title'}
        description={'Description'}
        isSwitching={true}
        onSwitchChange={(t)=>{console.log('switch: ',t); }}
      />
    </View>
  );
}

export default SettingsScreen;
