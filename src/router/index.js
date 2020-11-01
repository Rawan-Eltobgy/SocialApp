import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {PhoneRegistration, Verification, Profile} from '../screens';
import {colors} from '../config/styles';

export function AppContainer() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="PhoneRegistration"
      headerMode="screen"
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerTruncatedBackTitle: '',
        headerStyle: {
          height: 60,
          backgroundColor: 'transparent',
        },
      }}>
      <Stack.Screen name="PhoneRegistration" component={PhoneRegistration} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Profile"  options={{headerShown: false}} component={Profile} />
    </Stack.Navigator>
  );
}
