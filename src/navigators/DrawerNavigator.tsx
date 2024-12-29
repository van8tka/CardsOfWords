import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {RouteScreensEnum} from './screens';
import AboutContainer from '@components/About/AboutContainer';
import SettingsScreen from '@components/Settings/SettingsScreen';
import React from 'react';
import {RouteNavEnum} from './navigators';
import MainStackNavigator from './MainStackNavigator';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import {vs} from 'react-native-size-matters';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const localizedStrings = useLocalization();
  const theme = useThemes();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: theme.drawerColor,
        },
        headerStyle: {
          backgroundColor: theme.primaryColor,
        },
        headerTintColor: theme.headerColor,
        drawerActiveTintColor:  theme.primaryColor,
        drawerInactiveTintColor: theme.textSecondaryColor,
        drawerLabelStyle: {
          fontSize: vs(14),
        },
      }}

      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            <DrawerItem labelStyle={{fontSize: vs(14)}}
                        inactiveTintColor={theme.textSecondaryColor}
                        activeTintColor={theme.primaryColor}
                        pressColor={theme.primaryColorTransparent}
                        label={localizedStrings.like}
                        onPress={() => {
              //todo hide drawer and show like bottomsheet
              }} />
          </DrawerContentScrollView>
        );
      }}
    >
      <Drawer.Screen
        name={RouteNavEnum.MainStackNavigator}
        component={MainStackNavigator}
        options={{title:localizedStrings.appName}}
      />
      <Drawer.Screen
        name={RouteScreensEnum.AboutScreen}
        component={AboutContainer}
        options={{title:localizedStrings.aboutScreen}}
      />
      <Drawer.Screen
        name={RouteScreensEnum.SettingsScreen}
        component={SettingsScreen}
        options={{title:localizedStrings.settingsScreen}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
