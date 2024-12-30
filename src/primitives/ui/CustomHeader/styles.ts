import {ScaledSheet} from 'react-native-size-matters';
import {ITheme} from '@utils/themes/ITheme';

export const styles = (theme: ITheme) =>{
  return ScaledSheet.create({
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '60@vs',
      backgroundColor: theme.primaryColor,
    },
    title: {
      flex: 1,
      color: theme.headerColor,
      fontSize: '17@s',
    },
  });
};
