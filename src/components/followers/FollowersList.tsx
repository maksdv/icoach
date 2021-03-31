import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import { FollowerRow } from './FollowerRow';

const styles = StyleSheet.create({
  container: {},
});

export const FollowersList = ({data}) => {
  const renderItem = post => <FollowerRow data={post.item} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        data={data}
        nestedScrollEnabled
      />
    </SafeAreaView>
  );
};
