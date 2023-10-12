import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon_Ant from 'react-native-vector-icons/AntDesign';
import Icon_Ionicons from 'react-native-vector-icons/Ionicons';
import Icon_Mat from 'react-native-vector-icons/MaterialCommunityIcons';
import MainStackRouter from './MainStackRouter'; 
// Import your MainStackRouter component

import MainHome from '../screens/Homescreen/mainHome';
import Order from '../screens/order/order';
import Profile from '../screens/profile/profile';
import Stores from '../screens/stores/stores';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <Icon_Ant name="home" size={size} color={color} />;
          } else if (route.name === 'Stores') {
            return <Icon_Mat name="storefront-outline" size={size} color={color} />;
          } else if (route.name === 'Order') {
            return <Icon_Ant name="profile" size={size} color={color} />;
          } else if (route.name === 'Profile') {
            return <Icon_Mat name="account-circle-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Home" component={MainStackRouter}  options={{headerShown:false}}/>
      <Tab.Screen name="Stores" component={Stores} options={{headerShown:false}} />
      <Tab.Screen name="Order" component={Order}  options={{headerShown:false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown:false}} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
