import {TextInput, View} from 'react-native';
import {useState} from 'react';
import {useThemes} from '@utils/themes/ThemeContext';
import {useLocalization} from '@utils/localization/LocalizationContext';
import React from 'react';
import PrimaryButton from '@primitives/ui/PrimaryButton/PrimaryButton';
import styles from './styles';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {addDictionary} from '@redux/slices/dictionarySlice';
import {useNavigation} from '@react-navigation/native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';

function DictionaryCreateScreen() {

  const [text, setText] = useState('');

  const theme = useThemes();
  const localization = useLocalization();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  function onPressContinue(){
    dispatch(addDictionary(text));
    navigation.goBack();
  }

  return (
    <View>
      <LeftRightCommonHeader title={localization.addDictionary} onPressRight={onPressContinue} />
      <View style={styles(theme).container}>
        <TextInput
          style={styles(theme).input}
          onChangeText={(value)=> setText(value)}
          value={text}
          placeholder={localization.dictionaryPlaceholder}
          maxLength={120}
        />
      </View>
    </View>
  );
}

export default DictionaryCreateScreen;
