import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StartScreen, YourOrdersScreen} from '../../Screens';

const Stack = createStackNavigator();

const ScreenOptions = {
  headerShown: false,
  cardStyle: {
    borderTopLeftRadius: 45,
    backgroundColor: 'transparent',
  },
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={ScreenOptions}>
      <Stack.Screen name="START" component={StartScreen} />
      <Stack.Screen name="ORDER" component={YourOrdersScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
