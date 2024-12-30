import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme:ITheme) => ScaledSheet.create({
  button: {
    width: '100%',
    height: '54@vs',
    alignItems: 'center',
    borderRadius: '12@vs',
    backgroundColor: theme.primaryColor,
  },
  title: {
    fontSize: '15@vs',
    color: theme.buttonTitleColor,
  },
});

export default styles;
