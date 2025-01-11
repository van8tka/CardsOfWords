import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    titleContainer: {
      flexDirection: 'column',
    },
    title: {
      fontSize: '16@vs',
      color: theme.textSecondaryColor,
      paddingVertical: '4@vs',
    },
  });
};

export default styles;
