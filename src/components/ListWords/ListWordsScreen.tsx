import {FlatList, Text, View} from 'react-native';
import React from 'react';
import LeftCommonHeader from '@primitives/ui/CustomHeader/LeftCommonHeader';
import {useAppSelector} from '@hooks/reduxCommonHooks';
import {useThemes} from '@utils/themes/ThemeContext';

// @ts-ignore
function ListWordsScreen({route}) {
  const {title, idTheme} = route.params;
  const words = useAppSelector(state => state.words.words.filter(item => item.idTheme === idTheme));
  const theme = useThemes();

  return (
    <View style={{backgroundColor: theme.secondaryColor, flex:1}}>
      <LeftCommonHeader title={title} />
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{
            marginLeft: 12,
            marginRight: 8,
            backgroundColor: theme.primaryColor,
            height: 0.8,
          }} />
        )}
        keyExtractor={(item) => `${item.id}:${item.idTheme}`}
        data={words}
        renderItem={(item)=> {
        return (
          <View style={{paddingLeft: 12, paddingRight: 8}}>
            <Text style={{padding: 2, fontSize: 16, color: theme.textPrimaryColor}}>{item.item.foreign}</Text>
            <Text style={{padding: 2,fontSize: 16, color: theme.textSecondaryColor}}>{item.item.translation}</Text>
            <Text style={{padding: 2,fontSize: 16, color: theme.textPlaceholderColor}}>{item.item.transcription}</Text>
        </View>);
      }}
      />
    </View>
  );
}

export default ListWordsScreen;
