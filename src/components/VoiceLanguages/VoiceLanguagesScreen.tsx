import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {appStyles} from '../../../App.styles';
import {useThemes} from '@utils/themes/ThemeContext';
import Tts from 'react-native-tts';
import log from '@utils/logger';
import BouncyCheckbox from 'react-native-bouncy-checkbox/build/dist/BouncyCheckbox';
import IVoiceLang from '@models/IVoiceLang';
import {useAppDispatch, useAppSelector} from '@hooks/reduxCommonHooks';
import {setVoiceLanguage} from '@redux/slices/appSlice';

function VoiceLanguagesScreen() {
  log.debug('RepeatWordScreen', 'render');
  const theme = useThemes();
  const [voises, setVoises] = React.useState<IVoiceLang[]>([]);
  const dispatch = useAppDispatch();
  const selectedVoice = useAppSelector(state=> state.app.voiceLanguage);
  const [selectedId, setSelectedId] = useState<string>(selectedVoice?.id);

  useEffect(() => {
   Tts.voices().then((items) => {
      items.sort((a, b) =>  a.language.toLowerCase().localeCompare(b.language.toLowerCase()));
      setVoises( Array.from(new Map(items.map(item => [item.language, item])).values()));
   }).catch(e=>log.error('VoiceLanguagesScreen',e));
  }, []);

  function renderItem(item: IVoiceLang) {
    const isLastChecked = item.id === selectedId;
    return (
      <View style={{padding: 16}} key={item.id} >
        <BouncyCheckbox
          isChecked={isLastChecked}
          useBuiltInState={false}
          size={25}
          fillColor={theme.primaryColor}
          unFillColor={theme.textSecondaryColor}
          text={item.language}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ color: theme.textSecondaryColor }}
          onPress={()=>{
            setSelectedId(item.id);
            dispatch(setVoiceLanguage(item));}
          }
        />
      </View>
    );
  }

  return (
    <View style={appStyles(theme).screenContainer}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={voises}
        renderItem={item=> renderItem(item.item)}
      />
    </View>
  );
}


export default VoiceLanguagesScreen;
