import {ScaledSheet} from 'react-native-size-matters';
import {ITheme} from '@utils/themes/ITheme';

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.secondaryColor,
    },
    body: {
      flex: 1,
      paddingHorizontal: '12@vs',
      paddingTop: '6@vs',
    },
  });
};

export default styles;
