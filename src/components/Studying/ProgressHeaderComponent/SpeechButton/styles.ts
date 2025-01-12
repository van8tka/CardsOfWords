import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {
      position: 'absolute',
      justifyContent: 'center',
      right: 0,
      marginTop: '4@vs',
    },
    title: {
      fontSize: '14@vs',
      color: theme.textSecondaryColor,
      textAlign: 'center',
    },
  });
};

export default styles;
