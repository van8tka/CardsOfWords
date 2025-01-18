import {
  createDrawerNavigator,
  DrawerContentScrollView, DrawerHeaderProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {RouteScreensEnum} from './screens';
import AboutContainer from '@components/About/AboutContainer';
import React from 'react';
import {RouteNavEnum} from './navigators';
import MainStackNavigator from './MainStackNavigator';
import {useLocalization} from '@utils/localization/LocalizationContext';
import {useThemes} from '@utils/themes/ThemeContext';
import {vs} from 'react-native-size-matters';
import DrawerCustomHeader from '@primitives/ui/CustomHeader/DrawerCustomHeader';
import SettingsStackNavigator from '@navigators/SettingsStackNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

  const localizedStrings = useLocalization();
  const theme = useThemes();

  function renderHeader({options}: DrawerHeaderProps) {
      return <DrawerCustomHeader title={options.title || ''} />;
  }


  return (
    <Drawer.Navigator
      screenOptions={
      {
        header: renderHeader,
        drawerStyle: {
          backgroundColor: theme.drawerColor,
        },
        headerStyle: {
          backgroundColor: theme.primaryColor,
        },
        headerTintColor: theme.headerColor,
        drawerActiveTintColor:  theme.textSecondaryColor,
        drawerInactiveTintColor: theme.textSecondaryColor,
        drawerActiveBackgroundColor: theme.primaryColorTransparent,
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
        options={{title:localizedStrings.appName, headerShown: false}}
      />
      <Drawer.Screen
        name={RouteNavEnum.SettingsStackNavigator}
        component={SettingsStackNavigator}
        options={{title:localizedStrings.settingsScreen, headerShown: false}}
      />
      <Drawer.Screen
        name={RouteScreensEnum.AboutScreen}
        component={AboutContainer}
        options={{title:localizedStrings.aboutScreen}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
