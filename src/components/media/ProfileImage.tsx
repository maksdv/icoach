import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  image: {
    borderRadius: 100,
  },
});

export const ProfileImage = ({uri, width, heigth}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={uri || require('../../assets/profile.png')}
        style={[styles.image, {width: width, height: heigth}]}
      />
    </TouchableOpacity>
  );
};
