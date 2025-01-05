import {ScaledSheet} from 'react-native-size-matters';
import commonTheme from '@utils/themes/themes/commonTheme';

export const styles = ScaledSheet.create({
  floatBtnContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '50@vs',
    right: '40@s',
    flexDirection: 'column',
  },
  addBtn:{
    marginBottom:  '16@vs',
    backgroundColor: commonTheme.primaryColor,
    borderRadius: '24@vs',
  },
});
