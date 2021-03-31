import React from 'react';
import {StyleSheet, FlatList, SafeAreaView, View} from 'react-native';
import {FollowerRow, FollowerRowType} from './FollowerRow';

const styles = StyleSheet.create({
  container: {},
});

type FollowerListType = {
  followers: Array<FollowerRowType>;
};

export const FollowersList = ({followers}: FollowerListType) => {
  const renderItem = ({item}: {item:FollowerRowType}) => {
    return <FollowerRow {...item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{}}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        data={followers}
        nestedScrollEnabled
      />
    </SafeAreaView>
  );
};
