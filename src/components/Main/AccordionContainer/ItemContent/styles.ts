import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    accordBody: {
      paddingHorizontal: '12@s',
    },
    itemContainer:{
      paddingLeft: '8@s',
      paddingVertical: '12@s',
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    title: {
      color: theme.textSecondaryColor,
      fontSize: '14@vs',
    },
    percent: {
      color: theme.textSecondaryColor,
      fontSize: '12@vs',
    },

    addBtnContainer:{
      paddingLeft: '8@s',
      paddingVertical: '12@s',
      flexDirection: 'row',
      justifyContent:'center',
    },
    addTitle: {
      color: theme.primaryColor,
      fontSize: '14@vs',
      fontWeight: '500',
    },
  });
};

export default styles;
