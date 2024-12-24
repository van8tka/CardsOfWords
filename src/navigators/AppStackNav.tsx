import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import MainScreen from '@components/Main/MainScreen';
import SettingsScreen from '@components/Settings/SettingsScreen';
import {AppStackNavScreens} from './screens';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';
import CustomHeader from '../primitives/ui/CustomHeader/CustomHeader';

function AppStackNav () {
  const Stack = createNativeStackNavigator();
  const localizedStrings = useLocalization();

  function headerFunction({
                            navigation,
                            options,
                            route,
                          }: NativeStackHeaderProps) {

    if(route.name === AppStackNavScreens.MainScreen) {
      return null;
    }
    return <CustomHeader title={options.title} onPressLeft={()=> navigation.goBack()} />;
  }

  return(
    <Stack.Navigator initialRouteName={AppStackNavScreens.MainScreen} screenOptions={{header: headerFunction}}>
        <Stack.Screen
          name={AppStackNavScreens.MainScreen}
          component={MainScreen}
        />
      <Stack.Screen
        name={AppStackNavScreens.SettingsScreen}
        component={SettingsScreen}
        options={{title: localizedStrings.settingsScreen}}
      />
    </Stack.Navigator>
  );
}

export default AppStackNav;
