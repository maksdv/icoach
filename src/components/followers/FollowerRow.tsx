import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {ProfileImage} from '../media/ProfileImage';
import {UserInterface} from '../../services/interfaces/user';

export type FollowerRowType = Pick<
  UserInterface,
  'id' | 'name' | 'surname' | 'profilePicture'
>;

export const FollowerRow = ({
  id,
  name,
  surname,
  profilePicture,
}: FollowerRowType) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <ProfileImage uri={profilePicture} width={50} heigth={50} />
        <View style={styles.nameRow}>
          <Text>
            {name} {surname}
          </Text>
        </View>
      </View>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name="account-star-outline"
          style={{fontSize: 30}}
        />
      </View>
    </View>
  );
};

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
  iconContainer: {
    width: 40,
  },
});
