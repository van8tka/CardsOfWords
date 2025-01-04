import {useLocalization} from '@utils/localization/LocalizationContext';
import {View} from 'react-native';
import LeftRightCommonHeader from '@primitives/ui/CustomHeader/LeftRightCommonHeader';
import React from 'react';

function WordEditScreen() {
  const localization = useLocalization();

  return (
    <View>
      <LeftRightCommonHeader title={localization.editWord} onPressRight={()=>{}} />
    </View>
  );
}

export default WordEditScreen;
