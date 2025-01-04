import {View} from 'react-native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';
import React from 'react';
import {useLocalization} from '@utils/localization/LocalizationContext';

function WordCreateScreen() {
  const localization = useLocalization();

  return (
    <View>
      <LeftRightCommonHeader title={localization.addWord} onPressRight={()=>{}} />
    </View>
  );
}

export default WordCreateScreen;
