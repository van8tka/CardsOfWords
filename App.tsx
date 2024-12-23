import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import MainContainer from '@components/Main/MainContainer';
import { LocalizationProvider } from '@utils/localization/LocalizationContext';
import { ThemeProvider } from '@utils/themes/ThemeContext';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {

  useEffect(() => {
    const init = async () => {
      //todo any async load operations
       setTimeout(()=>{}, 1400);
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
    });
  }, []);

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
