import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import MainScreen from '@components/Main/MainScreen';
import {RouteScreensEnum} from './screens';
import React from 'react';
import DictionaryCreateScreen from '@components/DictionaryForm/DictionaryCreateScreen';
import {useLocalization} from '@utils/localization/LocalizationContext';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import DrawerCustomHeader from '@primitives/ui/CustomHeader/DrawerCustomHeader';

function MainStackNavigator () {
  const Stack = createNativeStackNavigator();
  const localizedStrings = useLocalization();

  function renderHeader({
                            options,
                            route,
                          }: NativeStackHeaderProps) {

    if(route.name === RouteScreensEnum.MainScreen) {
      return <DrawerCustomHeader title={options.title || ''} />;
    }
    return <LeftCommonHeader title={options.title || ''} />;
  }

  return(
    <Stack.Navigator
      initialRouteName={RouteScreensEnum.MainScreen}
      screenOptions={{header: renderHeader}}>
        <Stack.Screen
          name={RouteScreensEnum.MainScreen}
          component={MainScreen}
          options={{title: localizedStrings.appName }}
        />
      <Stack.Screen
          name={RouteScreensEnum.DictionaryCreateScreen}
          component={DictionaryCreateScreen}
          options={{title: localizedStrings.addDictionary}}
        />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
