import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {appStyles} from '../../../App.styles';
import {useThemes} from '@utils/themes/ThemeContext';
import {useLocalization} from '@utils/localization/LocalizationContext';
import DeviceInfo from 'react-native-device-info';
import styles from '@components/About/styles';

function AboutContainer() {
  const theme = useThemes();
  const locale = useLocalization();
  const [appInfo, setAppInfo] = useState({appVersion:'', buildNumber:''});

  useEffect(() => {
    const fetchBuildNumber = async () => {
      const number = await DeviceInfo.getBuildNumber();
      const version = await DeviceInfo.getVersion();
      setAppInfo({appVersion: version, buildNumber: number});
    };

    fetchBuildNumber();
  }, []);

  return (
    <View style={appStyles(theme).screenContainer}>
      <View style={styles(theme).container}>
        <Text style={styles(theme).appName}>{locale.appName}</Text>
        <Text style={styles(theme).text}>{`${locale.version} ${appInfo.appVersion} (${appInfo.buildNumber})`}</Text>
        <Text style={styles(theme).text}>{locale.createdBy}</Text>
      </View>
    </View>
  );
}

export default AboutContainer;
