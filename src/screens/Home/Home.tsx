import React, {useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {AuthContext} from '../../navigation/AuthProvider';

export const Home = ({navigation}) => {
  const {user} = useContext(AuthContext);
  return (
    <View style={styles.main}>
      <Text>{user.email}</Text>
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
