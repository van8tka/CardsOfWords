import {ITheme} from '@utils/themes/ITheme';
import commonTheme from '@utils/themes/themes/commonTheme';

const darkTheme: ITheme = {
  isDarkMode: true,
  primaryColor: commonTheme.primaryColor,
  secondaryColor: '#333333',
  textPrimaryColor: commonTheme.primaryColor,
  textSecondaryColor: '#ffffff',
  drawerColor: '#4c4f4d',
  primaryColorTransparent: commonTheme.primaryColorTransparent,
  headerColor: commonTheme.headerColor,
  buttonTitleColor: commonTheme.buttonTitleColor,
  textPlaceholderColor: '#4c4f4d',
  inputBackgroundColor: commonTheme.inputBackgroundColor,
  iconStrokeColor: '#ffffff',
  transcriptColor:  '#606060',
};

export default darkTheme;
