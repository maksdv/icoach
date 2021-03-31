import React from 'react';

import {View, ScrollView} from 'react-native';
import {Header} from '../../components/profile/Header';
import {Tabs} from '../../components/tabs/Tabs';
import api from '../../utils/mockApi';

export const Profile = () => {
  return (
    <ScrollView automaticallyAdjustContentInsets={true}>
      <Header uri="" />
      <Tabs
        headers={['Posts', 'Followers', 'Gallery']}
        posts={api.getUserPosts(api.userId)}
        followers={api.getUserFriends(api.userId)}
      />
    </ScrollView>
  );
};
