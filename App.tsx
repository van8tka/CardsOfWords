import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MainContainer from '@components/Main/MainContainer';
import { LocalizationProvider } from '@utils/localization/LocalizationContext';
import { ThemeProvider } from '@utils/themes/ThemeContext';

function App(): React.JSX.Element {


  return (
    <ThemeProvider>
      <SafeAreaView >
        <StatusBar
      //    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        />
        <LocalizationProvider>
          <MainContainer/>
        </LocalizationProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
