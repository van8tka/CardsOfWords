import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import MainScreen from '@components/Main/MainScreen';
import {RouteScreensEnum} from './screens';
import React from 'react';
import DictionaryCreateScreen from '@components/DictionaryForm/DictionaryCreateScreen';
import {useLocalization} from '@utils/localization/LocalizationContext';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import DrawerCustomHeader from '@primitives/ui/CustomHeader/DrawerCustomHeader';
import DictionaryEditScreen from '@components/DictionaryForm/DictionaryEditScreen';
import ThemeWordsCreateScreen from '@components/ThemeOfWordsForm/ThemeWordsCreateScreen';
import ThemeWordsEditScreen from '@components/ThemeOfWordsForm/ThemeWordsEditScreen';

const Stack = createNativeStackNavigator();

function MainStackNavigator () {

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
          options={{headerShown: false}}
        />
      <Stack.Screen
        name={RouteScreensEnum.DictionaryEditScreen}
        component={DictionaryEditScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreensEnum.ThemeWordsCreateScreen}
        component={ThemeWordsCreateScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RouteScreensEnum.ThemeWordsEditScreen}
        component={ThemeWordsEditScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
