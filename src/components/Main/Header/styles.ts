
import {ITheme} from '@utils/themes/ITheme';
import { ScaledSheet } from 'react-native-size-matters';

export const styles = (theme:ITheme) => {
  return ScaledSheet.create({
    save:{
      backgroundColor: '#881100',
    },
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
      fontSize: '16@s',
    },
  });
}


