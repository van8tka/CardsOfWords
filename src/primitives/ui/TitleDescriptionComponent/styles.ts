import {ScaledSheet} from 'react-native-size-matters';
import {ITheme} from '@utils/themes/ITheme';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {

      justifyContent: 'space-between',
      paddingVertical: '16@vs',
      borderBottomWidth: '0.8@vs',
      borderBottomColor: theme.primaryColor,
    },
    header: {
      fontSize: '15@vs',
      fontWeight: 'bold',
      color: theme.textSecondaryColor,
    },
    description: {
      marginTop: '8@vs',
      fontSize: '13@vs',
      color: theme.textSecondaryColor,
    },
  });
};

export default styles;
