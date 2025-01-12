import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      paddingTop: '4@vs',
      color: theme.textSecondaryColor,
      fontSize: '14@vs',
    },
    appName:{
      paddingTop: '4@vs',
      color: theme.textSecondaryColor,
      fontSize: '18@vs',
    },
  });
};

export default styles;
