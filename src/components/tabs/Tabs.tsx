import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Header, Root, Tab, Tabs as NBTabs} from 'native-base';
import {List} from '../posts/List';

const styles = StyleSheet.create({
  container: {},
  firstLineContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
});

const FirstRoute = () => (
  <View style={{flex: 1, backgroundColor: 'red'}}>
    <Text>okokokokok</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

export const Tabs = ({headers, posts}) => {
  return (
    <Root>
      <Container>
        <NBTabs tabContainerStyle={{backgroundColor: '#ffffff'}}>
          <Tab heading={headers[0]}>
            <List data={posts} />
          </Tab>
          <Tab heading={headers[1]}>
            <SecondRoute />
          </Tab>
          <Tab heading={headers[2]}>
            <FirstRoute />
          </Tab>
        </NBTabs>
      </Container>
    </Root>
  );
};
