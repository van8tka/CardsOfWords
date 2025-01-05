import {ITheme} from '@utils/themes/ITheme';
import {ScaledSheet} from 'react-native-size-matters';

const styles = (theme: ITheme) => ScaledSheet.create({
  separator:{
    marginLeft: '12@s',
    marginRight: '8@s',
    backgroundColor: theme.primaryColor,
    height: '0.8@vs',
  },
  itemContainer: {
    paddingLeft: '12@s',
    paddingRight: '8@s',
  },
  emptyList:{
    flexGrow: 1,
  },
  emptyContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    textAlign: 'center',
    fontSize: '16@vs',
    color: theme.textSecondaryColor,
  },
  foreign:{ padding: '2@vs', fontSize: '16@vs', color: theme.textPrimaryColor },
  translate:{ padding: '2@vs', fontSize: '16@vs', color: theme.textSecondaryColor },
  transcription:{ padding: '2@vs', fontSize: '16@vs', color: theme.transcriptColor },
});

export default styles;
