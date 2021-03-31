import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ProfileImage} from '../media/ProfileImage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  firstContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameRow: {
    paddingHorizontal: 10,
  },
  iconContainer:{
      width: 40,

  }
});

export const FollowerRow = ({data}) => {
  console.log(data);
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <ProfileImage uri={data.avatar} width={50} heigth={50} />
        <View style={styles.nameRow}>
          <Text>
            {data.name.first} {data.name.last}
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name="account-star-outline" style={{fontSize: 30}} />
      </View>
    </View>
  );
};
