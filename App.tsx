import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import { LocalizationProvider } from '@utils/localization/LocalizationContext';
import { ThemeProvider } from '@utils/themes/ThemeContext';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import commonTheme from '@utils/themes/themes/commonTheme';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './App.styles';
import store from '@redux/store';
import DrawerNavigator from '@navigators/DrawerNavigator';
import { Provider } from 'react-redux';


function App(): React.JSX.Element {

  useEffect(() => {
    const init = async () => {
      //todo any async load operations when show splash screen
      setTimeout(() => {
      }, 1400);
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  //todo kuzmuk need update barStyle in status bar
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <StatusBar
            barStyle="light-content"
            backgroundColor={commonTheme.primaryColor}
          />
          <LocalizationProvider>
            <SafeAreaProvider>
              <SafeAreaView style={styles.container}>
                <DrawerNavigator/>
              </SafeAreaView>
            </SafeAreaProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
