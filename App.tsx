import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import { LocalizationProvider } from '@utils/localization/LocalizationContext';
import { ThemeProvider } from '@utils/themes/ThemeContext';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import commonTheme from '@utils/themes/themes/commonTheme';
import AppStackNav from './src/navigators/AppStackNav';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './App.styles';


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

  //todo kuzmuk need update barStyle in status bar
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={commonTheme.primaryColor}
        />
        <LocalizationProvider>
          <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <AppStackNav/>
          </SafeAreaView>
            </SafeAreaProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </NavigationContainer>
  );


}

export default App;
