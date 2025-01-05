import {ITheme} from '@utils/themes/ITheme';
import commonTheme from '@utils/themes/themes/commonTheme';

const lightTheme: ITheme = {
  isDarkMode: false,
  primaryColor: commonTheme.primaryColor,
  secondaryColor: '#ffffff',
  textPrimaryColor: commonTheme.primaryColor,
  textSecondaryColor: '#333333',
  drawerColor: '#f0fcf5',
  primaryColorTransparent: commonTheme.primaryColorTransparent,
  headerColor: commonTheme.headerColor,
  textPlaceholderColor: '#cfcfcf',
  inputBackgroundColor: commonTheme.inputBackgroundColor,
  iconStrokeColor: '#333333',
  transcriptColor:  '#606060',
};

export default lightTheme;
