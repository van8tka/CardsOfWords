import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme:ITheme) => ScaledSheet.create({
  button: {
    width: '100%',
    height: '48@vs',
    alignItems: 'center',
    borderRadius: '12@vs',
    backgroundColor: theme.primaryColorTransparent,
  },
  title: {
    fontSize: '15@vs',
    fontWeight: '500',
    color: theme.textSecondaryColor,
  },
});

export default styles;
