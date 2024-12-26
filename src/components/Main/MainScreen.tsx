import {ScrollView, StyleSheet, Text, View} from 'react-native';
import log from '@utils/logger.ts';
import React, {useState} from 'react';
import MainFloatingBtnContainer from '@components/Main/FloatingBtnContainer/MainFloatingBtnContainer';
import Accordion from 'react-native-collapsible/Accordion';

function MainScreen() {

  log.debug('MainScreen', 'begin');

  const [ activeSections, setActiveSections ] = useState([]);
  const sections = [
    {
      title: 'Native development',
      content: <Text style={styles.textSmall}>
        React Native lets you create truly native apps and
        doesn't compromise your users' experiences. It provides a core set of platform
        agnostic native components
      </Text>
    },
    {
      title: 'Fast refresh',
      content: <Text style={styles.textSmall}>
        See your changes as soon as you save.
        With the power of JavaScript, React Native lets you iterate at
        lightning speed.
      </Text>
    },
    {
      title: 'Cross-platform',
      content:  <><Text style={styles.textSmall}>React components wrap existing native code
        and interact with native APIs via React's declarative UI paradigm
        and JavaScript. This enables native app development for whole new teams
        of developers</Text>
        <View style={styles.seperator}></View>
      </>
    }
  ];

  function renderHeader(section, _, isActive) {
    return (
      <View style={styles.accordHeader}>
        <Text style={styles.accordTitle}>{ section.title }</Text>
        {/*<Icon name={ isActive ? 'chevron-up' : 'chevron-down' }*/}
        {/*      size={20} color="#bbb" />*/}
      </View>
    );
  };

  function renderContent(section, _, isActive) {
    return (
      <View style={styles.accordBody}>
        {section.content}
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {/*<MainHeaderContainer />*/}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <Accordion
          align="bottom"
          sections={sections}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(sections) => setActiveSections(sections)}
          sectionContainerStyle={styles.accordContainer}
        />
      </ScrollView>
      <MainFloatingBtnContainer onAddPress={()=>{}} onUploadPress={()=>{}}/>
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  accordContainer: {
    paddingBottom: 4
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#666',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between'
  },
  accordTitle: {
    fontSize: 20,
  },
  accordBody: {
    padding: 12
  },
  textSmall: {
    fontSize: 16
  },
  seperator: {
    height: 12
  }
});

export default MainScreen;
