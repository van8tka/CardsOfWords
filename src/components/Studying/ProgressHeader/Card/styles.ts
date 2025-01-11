import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '260@s',
      height: '200@vs',
      backgroundColor: theme.primaryColor,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      margin: '10@vs',
    },
    text: {
      fontSize: '22@vs',
      color: theme.textSecondaryColor,
    },
  });
};

export default styles;
