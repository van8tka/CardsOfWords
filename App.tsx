import React, {useEffect} from 'react';
import { StatusBar } from 'react-native';
import { LocalizationProvider } from '@utils/localization/LocalizationContext';
import { ThemeProvider } from '@utils/themes/ThemeContext';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import commonTheme from '@utils/themes/themes/commonTheme';
import AppStackNav from './src/navigators/AppStackNav';

function App(): React.JSX.Element {

  useEffect(() => {
    const init = async () => {
      //todo any async load operations
      setTimeout(() => {
      }, 1400);
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);

  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar
          backgroundColor={commonTheme.primaryColor}
        />
        <LocalizationProvider>
          <AppStackNav/>
        </LocalizationProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
