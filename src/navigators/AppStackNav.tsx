import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '@components/Main/MainScreen';
import SettingsScreen from '@components/Settings/SettingsScreen';
import {AppStackNavScreens} from './screens';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';

function AppStackNav () {
  const Stack = createNativeStackNavigator();
  const localizedStrings = useLocalization();
  return(
    <Stack.Navigator initialRouteName={AppStackNavScreens.MainScreen} screenOptions={{headerShown: true}}>
        <Stack.Screen
          name={AppStackNavScreens.MainScreen}
          component={MainScreen}
          options={{title: localizedStrings.appName}}
        />
      <Stack.Screen
        name={AppStackNavScreens.SettingsScreen}
        component={SettingsScreen}
        options={{title: localizedStrings.appName}}
      />
    </Stack.Navigator>
  );
}

export default AppStackNav;
