import {ScaledSheet} from 'react-native-size-matters';
import {ITheme} from '@utils/themes/ITheme';

export const styles = (theme: ITheme) =>{
  return ScaledSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60@vs',
      paddingHorizontal: '20@s',
      backgroundColor: theme.primaryColor,
    },
    title: {
      color: theme.textSecondaryColor,
      fontSize: '20@s',
    },
  });
};
