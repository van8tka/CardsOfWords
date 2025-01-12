import commonTheme from '@utils/themes/themes/commonTheme';
import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

export const styles = ScaledSheet.create({
  safeArea: {
    backgroundColor: commonTheme.primaryColor,
    flex:1,
  },
});

export const appStyles = (theme: ITheme) => {
  return ScaledSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: theme.secondaryColor,
    },
  });
};
