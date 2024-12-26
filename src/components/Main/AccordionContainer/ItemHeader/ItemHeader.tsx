import {Text, View} from 'react-native';
import styles from './styles';
import React from 'react';
import {ITheme} from '@utils/themes/ITheme';

interface IItemHeaderProps {
  title: string;
  percent: string;
  theme: ITheme;
}

function ItemHeader({title,percent, theme}: IItemHeaderProps) {
  return (
    <View style={ styles(theme).accordHeader }>
      <Text style={ styles(theme).accordTitle }>{ title }</Text>
      <Text style={ styles(theme).accordPercent }>{ percent }</Text>
    </View>
  );
}

export default ItemHeader;
