import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Container, Root, Tab, Tabs as NBTabs} from 'native-base';
import {List} from '../posts/List';
import { FollowersList } from '../followers/FollowersList';

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

export const Tabs = ({headers, posts, followers}) => {
  console.log(followers,"->>>>>>>>>>>>")
  return (
    <Root>
      <Container>
        <NBTabs tabContainerStyle={{backgroundColor: '#ffffff'}}>
          <Tab heading={headers[0]}>
            <List data={posts} />
          </Tab>
          <Tab heading={headers[1]}>
            <FollowersList data={followers} />
          </Tab>
          <Tab heading={headers[2]}>
            <FirstRoute />
          </Tab>
        </NBTabs>
      </Container>
    </Root>
  );
};
