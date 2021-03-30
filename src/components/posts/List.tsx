import React from 'react';
import {StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {Post} from './Post';

const styles = StyleSheet.create({
  container: {flex: 1},
});

export const List = ({data}) => {
  console.log(data.length);
  const renderItem = post => <Post data={post} />;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        renderItem={renderItem}
        keyExtractor={item => item.id}
        data={data}
      />
    </SafeAreaView>
  );
};
