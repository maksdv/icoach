import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import {ProfileImage} from '../media/ProfileImage';
import {Name} from './Name';

const styles = StyleSheet.create({
  container: {},
  firstLineContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  iconContainer: {
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 40,
    padding: 10,
  },
  icons: {
    fontSize: 30,
  },
});

export const Header = ({uri}) => {
  return (
    <View style={styles.container}>
      <View style={styles.firstLineContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome
            name="edit"
            onPress={() => console.log('edit')}
            style={styles.icons}
          />
        </TouchableOpacity>
        <ProfileImage uri={uri} />
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome
            name="message1"
            onPress={() => console.log('edit')}
            style={styles.icons}
          />
        </TouchableOpacity>
      </View>
      <Name name={undefined} phrase={undefined} />
    </View>
  );
};
