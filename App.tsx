import React, {useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import { LocalizationProvider } from '@utils/localization/LocalizationContext';
import { ThemeProvider } from '@utils/themes/ThemeContext';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import commonTheme from '@utils/themes/themes/commonTheme';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './App.styles';
import {store, persistor} from '@redux/store';
import DrawerNavigator from '@navigators/DrawerNavigator';
import { Provider } from 'react-redux';
import {ToastProvider} from '@utils/toast/ToastContext';
import {PersistGate} from 'redux-persist/integration/react';


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

  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ToastProvider>
        <NavigationContainer>
          <ThemeProvider>
            <StatusBar
              barStyle= {isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={commonTheme.primaryColor}
            />
            <LocalizationProvider>
              <SafeAreaProvider>
                <SafeAreaView style={styles.safeArea}>
                  <DrawerNavigator/>
                </SafeAreaView>
              </SafeAreaProvider>
            </LocalizationProvider>
          </ThemeProvider>
        </NavigationContainer>
      </ToastProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
