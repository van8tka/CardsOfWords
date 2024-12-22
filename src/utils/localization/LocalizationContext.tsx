import React from 'react';
import {createContext, ReactNode, useContext} from 'react';
import en from '@utils/localization/locales/en';
import ru from '@utils/localization/locales/ru';
import {getLocales} from 'react-native-localize';
import ILocalizedStrings from '@utils/localization/ILocalizedStrings';

const rusLocales = ['ru', 'by', 'ua', 'md', 'kz', 'kg'];
const strings = { en, ru };

const LocalizationContext = createContext<ILocalizedStrings | undefined>(undefined);

export const LocalizationProvider: React.FC<{children: ReactNode}> = ({ children}) => {
  const locales = getLocales();
  let currentLanguage = 'en';

  if (locales && locales.length > 0 && rusLocales.includes(locales[0].languageCode)) {
    currentLanguage = 'ru';
  }
  // @ts-ignore
  const localizedStrings = strings[currentLanguage];
  return (
    <LocalizationContext.Provider value={localizedStrings}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): ILocalizedStrings => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
