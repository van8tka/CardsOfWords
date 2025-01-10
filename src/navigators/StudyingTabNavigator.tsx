import React from 'react';
import {BottomTabNavigatorProps, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteScreensEnum} from '@navigators/screens';
import RepeatWordScreen from '@components/Studying/RepeatWord/RepeatWordScreen';
import SelectWordScreen from '@components/Studying/SelectWord/SelectWordScreen';
import WriteWordScreen from '@components/Studying/WriteWord/WriteWordScreen';
import {useThemes} from '@utils/themes/ThemeContext';
import FlipIconDark from '@assets/icons/dark/flip_icon.svg';
import FlipIconLight from '@assets/icons/light/flip_icon.svg';
import KeyboardIconDark from '@assets/icons/dark/keyboard_icon.svg';
import KeyboardIconLight from '@assets/icons/light/keyboard_icon.svg';
import SelectIconDark from '@assets/icons/dark/select_icon.svg';
import SelectIconLight from '@assets/icons/light/select_icon.svg';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import {TouchableOpacity, View} from 'react-native';
import {vs} from 'react-native-size-matters';


const Tab = createBottomTabNavigator();

function StudyingTabNavigator() {
  const theme = useThemes();

  function tabHeader(props: BottomTabNavigatorProps){
    console.log('+++ props', props.route?.params);
    return <LeftCommonHeader title={'test 1'} />;
  }

  const touchableOpacity = props => <TouchableOpacity {...props} />;

  const focusedStyles = {
    backgroundColor: theme.primaryColor,
    paddingVertical: vs(8),
    paddingHorizontal: vs(10),
    marginTop: vs(8),
    borderRadius: 5,
  };

 function getRepeatWordTabIcon(props: any) {
   const {focused, size} = props;
   if(theme.isDarkMode){
      return focused ?
        <View style={focusedStyles}><FlipIconLight height={size} width={size} /></View> :
        <FlipIconLight width={size} height={size} />;
   }
   return focused ?
     <View style={focusedStyles}><FlipIconDark height={size} width={size} /></View> :
    <FlipIconDark width={size} height={size} />;
 }

  function getSelectWordTabIcon(props: any) {
    const {focused, size} = props;
   if(theme.isDarkMode){
      return focused ?
        <View style={focusedStyles}><SelectIconLight height={size} width={size} /></View> :
        <SelectIconLight width={size} height={size} />;
    }
    return focused ?
      <View style={focusedStyles}><SelectIconDark height={size} width={size} /></View> :
      <SelectIconDark width={size} height={size} />;
  }

  function getWriteWordTabIcon(props: any) {
    const {focused, size} = props;
    if(theme.isDarkMode){
      return focused ?
        <View style={focusedStyles}><KeyboardIconLight height={size} width={size} /></View> :
        <KeyboardIconLight width={size} height={size} />;
    }
    return focused ?
      <View style={focusedStyles}><KeyboardIconDark height={size} width={size} /></View> :
      <KeyboardIconDark width={size} height={size} />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: theme.primaryModeColor},
      }}
    >
      <Tab.Screen
        name={RouteScreensEnum.RepeatWordScreen}
        component={RepeatWordScreen}
        options={{
          tabBarIcon: getRepeatWordTabIcon,
          header: tabHeader,
          tabBarButton: props => touchableOpacity(props),
        }}
      />
      <Tab.Screen
        name={RouteScreensEnum.SelectWordScreen}
        component={SelectWordScreen}  options={{
        tabBarIcon: getSelectWordTabIcon,
        header: tabHeader,
        tabBarButton: props => touchableOpacity(props),
      }}/>
      <Tab.Screen
        name={RouteScreensEnum.WriteWordScreen}
        component={WriteWordScreen}  options={{
        tabBarIcon: getWriteWordTabIcon,
        header: tabHeader,
        tabBarButton: props => touchableOpacity(props),
      }}/>
    </Tab.Navigator>
  );
}

export default StudyingTabNavigator;
