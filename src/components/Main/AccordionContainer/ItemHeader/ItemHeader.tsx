import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import {ITheme} from '@utils/themes/ITheme';
import SwipeItem from '@primitives/ui/SwipeableItem/SwipeItem';

interface IItemHeaderProps {
  title: string;
  percent: string;
  theme: ITheme;
}

function ItemHeader({title,percent, theme}: IItemHeaderProps) {
  return (
    <SwipeItem
      onDelete={()=> console.log('+++ DELETE')}
      onEdit={()=> console.log('+++ CHANGE')} >
      <View style={ styles(theme).accordHeader }>
        <Text style={ styles(theme).accordTitle }>{ title }</Text>
        <Text style={ styles(theme).accordPercent }>{ percent }</Text>
      </View>
    </SwipeItem>
  );
}

export default ItemHeader;
