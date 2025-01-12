import {useNavigation} from '@react-navigation/native';
import {RouteNavEnum} from '@navigators/navigators';
import {RouteScreensEnum} from '@navigators/screens';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import {useAppSelector} from '@hooks/reduxCommonHooks';
import {ToastTypeEnum, useToast} from '@utils/toast/ToastContext';
import {useLocalization} from '@utils/localization/LocalizationContext';

const useNavigateToStudying = () => {
  const showToast = useToast();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const locale = useLocalization();
  const words = useAppSelector(state => state.words.words);

  function navigate(idTheme: number, title: string){
    if(words?.find((item => item.idTheme === idTheme))){
      navigation.navigate(RouteNavEnum.StudyingTabNavigator, {screen: RouteScreensEnum.RepeatWordScreen, params: { idTheme, title }});
    }
    else {
      showToast(locale.noWordsForStudying, ToastTypeEnum.error);
    }
  }

  return {navigate};
};

export default useNavigateToStudying;
