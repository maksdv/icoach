import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Onboarding = () => {
  return (
    <View style={styles.main}>
      <Text>Onboarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
