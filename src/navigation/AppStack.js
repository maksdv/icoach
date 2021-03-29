import React, { useContext } from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from '../screens/Home/Home';
import { AuthContext } from './AuthProvider';
import { Profile } from '../screens/Profile/Profile';
import { Settings } from '../screens/settings/Settings';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    
  </Stack.Navigator>
  );
};

const ProfileStack = () => {
  const {logout} = useContext(AuthContext);
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false
        // headerRight: () => (
        //   <View style={{marginRight: 10}}>
        //     <Antdesign.Button
        //       name="logout"
        //       size={22}
        //       backgroundColor="#fff"
        //       color="#2e64e5"
        //       onPress={() => logout()}
        //     />
        //   </View>
        // ),
      }}
    />
    
  </Stack.Navigator>
  );
};

const SettingsStack = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    
  </Stack.Navigator>
  );
};

const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : '';

    if (routeName === 'Chat') {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#2e64e5',
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={({route}) => ({
          tabBarLabel: 'Profile',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={({route}) => ({
          tabBarLabel: 'Settings',
          // tabBarVisible: route.state && route.state.index === 0,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account-settings-outline"
              color={color}
              size={size}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppStack;