import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';
import commonTheme from '@utils/themes/themes/commonTheme';

const styles = (theme: ITheme) => ScaledSheet.create({
  container: {
    flex: 1,
    padding: '10@vs',
  },
  input: {
    height: '54@vs',
    borderStyle: 'solid',
    borderColor: theme.inputBackgroundColor,
    borderWidth: '2@vs',
    borderRadius:'6@vs',
    color: theme.textSecondaryColor,
    placeholderColor: theme.textPlaceholderColor,
    fontSize: '16@vs',
    paddingHorizontal: '12@vs',
    marginBottom: '12@vs',
  },
  error: {
    color: commonTheme.errorColor,
    marginBottom: '10@vs',
  },
});

export default styles;
