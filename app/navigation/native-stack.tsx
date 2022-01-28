import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DrawerNavigator} from './drawer-navigator';
import {About} from '../screens/about';

export type PrimaryNavigatorParamList = {
  DrawerNavigator: undefined;
  About: undefined;
};

const Stack = createNativeStackNavigator<PrimaryNavigatorParamList>();

export const PrimaryNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#212121',
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={'DrawerNavigator'}
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'About'} component={About} />
    </Stack.Navigator>
  );
};
