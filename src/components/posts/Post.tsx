import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  image: {
    resizeMode: 'contain',
    width: '100%',
  },
});

export const Post = ({data}) => {
  return (
    <View style={styles.container}>
      <Text>{data.item.text}</Text>
      <Image source={data.item.img} style={styles.image} />
    </View>
  );
};
