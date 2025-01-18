import {ScaledSheet} from 'react-native-size-matters';
import {ITheme} from '@utils/themes/ITheme';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: '16@vs',
      borderBottomWidth: '0.8@vs',
      borderBottomColor: theme.primaryColor,
    },
    textContainer: {
      flex: 1,
      marginRight: '16@vs',
    },
    header: {
      fontSize: '16@vs',
      fontWeight: 'bold',
      color: theme.textSecondaryColor,
    },
    description: {
      fontSize: '14@vs',
      color: theme.textSecondaryColor,
    },
  });
};

export default styles;
