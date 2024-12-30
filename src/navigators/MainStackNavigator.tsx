import {createNativeStackNavigator, NativeStackHeaderProps} from '@react-navigation/native-stack';
import MainScreen from '@components/Main/MainScreen';
import {RouteScreensEnum} from './screens';
import React from 'react';
import CustomHeader from '../primitives/ui/CustomHeader/CustomHeader';
import LeftBackIcon from '@assets/icons/left_back_icon.svg';
import CheckIcon from '@assets/icons/check_icon.svg';
import DictionaryCreateScreen from '@components/DictionaryForm/DictionaryCreateScreen';
import {useLocalization} from '@utils/localization/LocalizationContext';

function MainStackNavigator () {
  const Stack = createNativeStackNavigator();

  const localizedStrings = useLocalization();

  function headerFunction({
                            navigation,
                            options,
                            route,
                          }: NativeStackHeaderProps) {

    if(route.name === RouteScreensEnum.MainScreen) {
      return null;
    }
    return <CustomHeader
      title={options.title}
      onPressLeft={() => navigation.goBack()}
      leftBtnIcon={LeftBackIcon}
      onPressRight={() => {}}
      rightBtnIcon={CheckIcon}
    />;
  }

  return(
    <Stack.Navigator initialRouteName={RouteScreensEnum.MainScreen} screenOptions={{header: headerFunction}}>
        <Stack.Screen
          name={RouteScreensEnum.MainScreen}
          component={MainScreen}
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
