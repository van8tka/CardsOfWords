import {ITheme} from '@utils/themes/ITheme';
import {s, ScaledSheet} from 'react-native-size-matters';

export const CARD_WIDTH = s(280);

const styles = (theme: ITheme) => {
  return ScaledSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: CARD_WIDTH,
      height: '200@vs',
      backgroundColor: theme.primaryColor,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      paddingHorizontal: '8@vs',
      fontSize: '22@vs',
      color: theme.textSecondaryColor,
    },
  });
};

export default styles;
