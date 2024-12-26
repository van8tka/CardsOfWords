import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import {useThemes} from '@utils/themes/ThemeContext';
import styles from './styles';
import Dictionary from '../../../models/Dictionary';
import ThemeOfWords from '../../../models/ThemeOfWords';
import ItemContainer from '@components/Main/AccordionContainer/ItemContent/ItemContainer';
import ItemHeader from '@components/Main/AccordionContainer/ItemHeader/ItemHeader';
import {percentFormatter} from '@components/Main/AccordionContainer/formatter';

interface IAccordionContainerProps {
  sections: {
    dictionary: Dictionary,
    themes: ThemeOfWords[],
  }[],
}

function AccordionContainer({sections}: IAccordionContainerProps) {
  const theme = useThemes();
  const [ activeSections, setActiveSections ] = useState<number[]>([]);

//todo must using model type
  function renderHeader(section: any) {
    return <ItemHeader
      theme={theme}
      title={section.dictionary.name}
      percent={percentFormatter(section.dictionary.percentOfLearned)}
    />;
  }
//todo must using model type
  function renderContent(section: any) {
    return <ItemContainer
      theme={theme}
      themeWord={section.themes} />;
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
