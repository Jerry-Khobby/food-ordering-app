import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainHome from '../screens/Homescreen/mainHome';
import Order from '../screens/order/order';
import Profile from '../screens/profile/profile';
import Stores from '../screens/stores/stores';

const Stack = createStackNavigator();

const MainStackRouter = () => {
  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={MainHome} />
        <Stack.Screen name="Stores" component={Stores} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
  );
};

export default MainStackRouter;
