import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { PostFooter } from './PostFooter';
import {PostHeader} from './PostHeader';

const styles = StyleSheet.create({
  container: {},
  image: {
    resizeMode: 'stretch',
    height: 300
  },
});

export const Post = ({data}) => {
  return (
    <View style={styles.container}>
      <PostHeader uri={data.userAvatar} text={data.userName} />
      <Image source={data.img} style={styles.image} />
      <PostFooter text={data.text} likes={data.likes} />
    </View>
  );
};
