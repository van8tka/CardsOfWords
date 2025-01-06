import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';


const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      flex: 1,
      paddingHorizontal: '4@s',
      paddingVertical: '4@vs',
      backgroundColor: theme.textPlaceholderColor,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
      marginVertical: '3@s',
    },
    charContainer: {
      justifyContent: 'center',
      backgroundColor: theme.secondaryColor,
      width: '30@s',
      height: '42@vs',
      borderRadius: 4,
      marginHorizontal: '2@s',
    },
    charTitle: {
      color: theme.textSecondaryColor,
      textAlign: 'center',
      fontSize: '20@vs',
    },
    button: {
      flex: 1,
    },
  });
};

export default styles;
