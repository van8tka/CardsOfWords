import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {ITheme} from '@utils/themes/ITheme';
import lightTheme from '@utils/themes/themes/lightTheme';
import darkTheme from '@utils/themes/themes/darkTheme';
import {Appearance, useColorScheme} from 'react-native';


const ThemeContext = createContext<ITheme|undefined>(undefined);

export const ThemeProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [theme, setTheme] = useState<ITheme>(isDarkMode ? darkTheme : lightTheme);


  useEffect(() => {
    const appearanceSubscription = Appearance.addChangeListener(
      ({colorScheme}) => {
        setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
      },
    );
    return () => appearanceSubscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={theme} >{children}</ThemeContext.Provider>
  );
};

export const useThemes = (): ITheme => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemes must be used within a ThemeProvider');
  }

  return context;
};
