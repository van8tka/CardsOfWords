import React, {useState} from 'react';
import {View, Text, Switch } from 'react-native';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';

interface ISwitchComponent {
  title: string;
  description: string;
  isSwitching: boolean;
  onSwitchChange: (value: boolean) => void;
}

function SwitchComponent({title, description, isSwitching, onSwitchChange}: ISwitchComponent){
  const theme = useThemes();
  const [isEnabled, setIsEnabled] = useState(isSwitching);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onSwitchChange(!isEnabled);
  };

  return (
    <View style={styles(theme).container}>
      <View style={styles(theme).textContainer}>
        <Text style={styles(theme).header}>{title}</Text>
        <Text style={styles(theme).description}>{description}</Text>
      </View>
      <Switch
        trackColor={{ false: theme.transcriptColor, true: theme.primaryColorTransparent }}
        thumbColor={isEnabled ? theme.primaryColor : theme.textSecondaryColor}
        ios_backgroundColor={theme.primaryColorTransparent}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export default SwitchComponent;
