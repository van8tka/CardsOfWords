import {ScaledSheet} from 'react-native-size-matters';
import commonTheme from '@utils/themes/themes/commonTheme';

const styles = ScaledSheet.create({
  rightActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteAction: {
    width: '80@s',
    height: '50@vs',
    backgroundColor: commonTheme.swipeDeleteBackground,
    justifyContent: 'center',
  },
  changeAction:{
    width: '80@s',
    height: '50@vs',
    backgroundColor: commonTheme.swipeEditBackground,
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default styles;
