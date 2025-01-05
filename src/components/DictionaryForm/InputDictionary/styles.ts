import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet, vs} from 'react-native-size-matters';

const styles = (theme: ITheme) => ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.secondaryColor,
    paddingVertical: vs(8),
    paddingHorizontal: vs(8),
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
});

export default styles;
