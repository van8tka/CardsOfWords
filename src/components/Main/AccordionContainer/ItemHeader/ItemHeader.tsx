import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import {ITheme} from '@utils/themes/ITheme';
import SwipeItem from '@primitives/ui/SwipeableItem/SwipeItem';
import log from '@utils/logger';

interface IItemHeaderProps {
  title: string;
  percent: string;
  theme: ITheme;
  onDelete: () => void;
  onEdit: () => void;
}

function ItemHeader({title, percent, theme, onDelete, onEdit}: IItemHeaderProps) {
  log.debug('ItemHeader', 'render', title);

  return (
    <SwipeItem
      onDelete={onDelete}
      onEdit={onEdit} >
      <View style={ styles(theme).accordHeader }>
        <Text style={ styles(theme).accordTitle }>{ title }</Text>
        <Text style={ styles(theme).accordPercent }>{ percent }</Text>
      </View>
    </SwipeItem>
  );
}

export default ItemHeader;
