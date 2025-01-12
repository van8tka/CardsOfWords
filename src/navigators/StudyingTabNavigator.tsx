import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteScreensEnum} from '@navigators/screens';
import RepeatWordScreen from '@components/Studying/RepeatWordScreen/RepeatWordScreen';
import SelectWordScreen from '@components/Studying/SelectWordScreen/SelectWordScreen';
import WriteWordScreen from '@components/Studying/WriteWordScreen/WriteWordScreen';
import {useThemes} from '@utils/themes/ThemeContext';
import FlipIconDark from '@assets/icons/dark/flip_icon.svg';
import FlipIconLight from '@assets/icons/light/flip_icon.svg';
import KeyboardIconDark from '@assets/icons/dark/keyboard_icon.svg';
import KeyboardIconLight from '@assets/icons/light/keyboard_icon.svg';
import SelectIconDark from '@assets/icons/dark/select_icon.svg';
import SelectIconLight from '@assets/icons/light/select_icon.svg';
import {TouchableOpacity, View} from 'react-native';
import {vs} from 'react-native-size-matters';
import {SvgProps} from 'react-native-svg';


const Tab = createBottomTabNavigator();

// @ts-ignore
function StudyingTabNavigator({route}) {
  const theme = useThemes();
  const routeParam = useMemo(() => (route?.params?.params ?? []), [route]);

  // @ts-ignore
  const touchableOpacity = props => <TouchableOpacity {...props} />;

  const focusedStyles = {
    backgroundColor: theme.primaryModeColor,
    paddingVertical: vs(8),
    paddingHorizontal: vs(10),
    marginTop: vs(8),
    borderRadius: 5,
  };

  function getTabBarIcon(
    prop: { focused: boolean; color: string; size: number },
    TabIconLight: React.FC<SvgProps>,
    TabIconDark: React.FC<SvgProps>) {
    const {focused, size} = prop;
    if (theme.isDarkMode) {
      return focused ?
        <View style={focusedStyles}><TabIconLight height={size} width={size}/></View> :
        <TabIconLight width={size} height={size}/>;
    }
    return focused ?
      <View style={focusedStyles}><TabIconDark height={size} width={size}/></View> :
      <TabIconDark width={size} height={size}/>;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: theme.primaryColor},
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={RouteScreensEnum.RepeatWordScreen}
        component={RepeatWordScreen}
        options={{
          title: routeParam?.title ?? '',
          tabBarIcon: (prop) => getTabBarIcon(prop, FlipIconLight, FlipIconDark),
          tabBarButton: props => touchableOpacity(props),
        }}
        initialParams={{routeParam}}
      />
      <Tab.Screen
        name={RouteScreensEnum.SelectWordScreen}
        component={SelectWordScreen}
        options={{
        title: routeParam?.title ?? '',
        tabBarIcon: (prop) => getTabBarIcon(prop, SelectIconLight, SelectIconDark),
        tabBarButton: props => touchableOpacity(props),
      }}
        initialParams={{routeParam}}
        />
      <Tab.Screen
        name={RouteScreensEnum.WriteWordScreen}
        component={WriteWordScreen}
        options={{
        tabBarIcon: (prop) => getTabBarIcon(prop, KeyboardIconLight, KeyboardIconDark),
        tabBarButton: props => touchableOpacity(props),
      }}
        initialParams={{routeParam}}
      />
    </Tab.Navigator>
  );
}

export default StudyingTabNavigator;
