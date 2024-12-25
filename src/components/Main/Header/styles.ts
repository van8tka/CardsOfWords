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
      backgroundColor: theme.primaryColor,
    },
    title: {
      paddingLeft: '20@s',
      flex: 0.9,
      color: theme.textSecondaryColor,
      fontSize: '17@s',
    },
  });
};


