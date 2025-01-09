import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteScreensEnum} from '@navigators/screens';
import RepeatWordScreen from '@components/Studying/RepeatWord/RepeatWordScreen';
import SelectWordScreen from '@components/Studying/SelectWord/SelectWordScreen';
import WriteWordScreen from '@components/Studying/WriteWord/WriteWordScreen';

const Tab = createBottomTabNavigator();

function StudyingTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={RouteScreensEnum.RepeatWordScreen} component={RepeatWordScreen} />
      <Tab.Screen name={RouteScreensEnum.SelectWordScreen} component={SelectWordScreen} />
      <Tab.Screen name={RouteScreensEnum.WriteWordScreen} component={WriteWordScreen} />
    </Tab.Navigator>
  );
}

export default StudyingTabNavigator;
