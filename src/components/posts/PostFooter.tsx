import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
      padding: 5
  },
  image: {
    resizeMode: 'stretch',
    height: 300,
  },
  heart: {
    fontSize: 30,
  },
  likesContainer:{
      flexDirection: 'row',
      alignItems: 'center',

  }
});

export const PostFooter = ({text, likes}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{text}</Text>
      </View>
      <View style={styles.likesContainer}>
        <MaterialCommunityIcons name="heart" style={styles.heart} />
        <Text>{likes}</Text>
      </View>
    </View>
  );
};
