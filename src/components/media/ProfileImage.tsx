import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    borderRadius: 100,
  },
});

export const ProfileImage = ({uri}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../../assets/profile.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};
