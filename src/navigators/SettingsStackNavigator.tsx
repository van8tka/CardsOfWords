import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import {RouteScreensEnum} from './screens';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import DrawerCustomHeader from '@primitives/ui/CustomHeader/DrawerCustomHeader';
import SettingsScreen from '@components/Settings/SettingsScreen';
import VoiceLanguagesScreen from '@components/VoiceLanguages/VoiceLanguagesScreen';

const Stack = createNativeStackNavigator();

function SettingsStackNavigator () {

  const localizedStrings = useLocalization();

  function renderHeader({
                          options,
                          route,
                        }: NativeStackHeaderProps) {

    if(route.name === RouteScreensEnum.SettingsScreen) {
      return <DrawerCustomHeader title={options.title || ''} />;
    }
    return <LeftCommonHeader title={options.title || ''} />;
  }

  return(
    <Stack.Navigator
      initialRouteName={RouteScreensEnum.SettingsScreen}
      screenOptions={{header: renderHeader}}>
      <Stack.Screen
        name={RouteScreensEnum.SettingsScreen}
        component={SettingsScreen}
        options={{title: localizedStrings.settingsScreen }}
      />
      <Stack.Screen
        name={RouteScreensEnum.VoiceLanguagesScreen}
        component={VoiceLanguagesScreen}
        options={{title: localizedStrings.chooseVoiceLanguage }}
      />
    </Stack.Navigator>
  );
}

export default SettingsStackNavigator;
