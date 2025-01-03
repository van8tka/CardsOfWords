import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';
import Dictionary from '../../../models/Dictionary';
import ThemeOfWords from '../../../models/ThemeOfWords';
import ItemsContainer from '@components/Main/AccordionContainer/ItemContent/ItemContainer';
import ItemHeader from '@components/Main/AccordionContainer/ItemHeader/ItemHeader';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';
import {useAppDispatch} from '@hooks/reduxCommonHooks';
import {removeDictionary} from '@redux/slices/dictionarySlice';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '@navigators/types';
import {RouteScreensEnum} from '@navigators/screens';

type SectionDictionary = {
  dictionary: Dictionary,
  themes: ThemeOfWords[],
}

interface IAccordionContainerProps {
  sections: SectionDictionary[],
}

function AccordionContainer({sections}: IAccordionContainerProps) {
  const theme = useThemes();
  const [activeSections, setActiveSections] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  function onDeleteItem(item: Dictionary){
     dispatch(removeDictionary(item.id));
  }

  function onEditItem(item: Dictionary){
    navigation.navigate(RouteScreensEnum.DictionaryEditScreen, { dictionary: item});
  }

  function renderHeader(section: SectionDictionary) {
    return <ItemHeader
      theme={theme}
      title={section.dictionary.name}
      onDelete={() => onDeleteItem(section.dictionary)}
      onEdit={()=> onEditItem(section.dictionary)}
      percent={percentFormatter(section.dictionary.percentOfLearned)}
    />;
  }

  function renderContent(section: SectionDictionary) {
    return <ItemsContainer
      theme={theme}
      themeWord={section.themes}/>;
  }

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles(theme).container}>
        <Accordion
          align="bottom"
          sections={sections}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(activeSec) => {
            setActiveSections(activeSec);
          }}
          sectionContainerStyle={styles(theme).accordContainer}
        />
      </ScrollView>
    </>
  );
}

export default AccordionContainer;
