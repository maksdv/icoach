import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
      alignItems: 'center'
  },
  name:{
      fontSize: 16,
      fontWeight: 'bold'
  }
});

export const Name = ({
  name = 'Profesor Splinter',
  phrase = 'I wanna be your sensei',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text>{phrase}</Text>
    </View>
  );
};
