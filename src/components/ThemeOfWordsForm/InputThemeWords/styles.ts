import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet, vs} from 'react-native-size-matters';

const styles = (theme: ITheme) => ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.secondaryColor,
    paddingVertical: vs(4),
  },
  input: {
    height: vs(54),
    backgroundColor: theme.inputBackgroundColor,
    color: theme.textSecondaryColor,
    placeholderColor: theme.textPlaceholderColor,
    fontSize: vs(16),
    paddingHorizontal: vs(12),
  },
});

export default styles;
