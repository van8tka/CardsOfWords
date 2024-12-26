import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) =>{
  return ScaledSheet.create({
    accordHeader: {
      padding: '12@s',
      backgroundColor: '#40d47f59',
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
    accordTitle: {
      flex: 0.9,
      fontSize: '16@vs',
      color: theme.textPrimaryColor,
    },
    accordPercent: {
      fontSize: '12@vs',
      color: theme.textSecondaryColor,
    },
  });
};

export default styles;
