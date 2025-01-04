import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.secondaryColor,
  },
});

export default styles;
