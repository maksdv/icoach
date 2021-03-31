import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ColorsPallete} from '../../utils/colorsPallete';
import {ProfileImage} from '../media/ProfileImage';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    backgroundColor: ColorsPallete.light,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
  },
  name: {
    paddingHorizontal:10
  },
});

export const PostHeader = ({uri, text}) => {
  return (
    <View style={styles.container}>
      <View>
        <ProfileImage uri={uri} width={50} heigth={50} />
      </View>
      <View style={styles.name}>
        <Text>{text}</Text>
      </View>
    </View>
  );
};
