import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Post} from './Post';

const styles = StyleSheet.create({
  container: {},
});

export const List = ({data}) => {
  const renderItem = post => <Post data={post.item} />;
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
