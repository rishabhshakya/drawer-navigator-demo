import React from 'react';
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {HomeScreen} from '../screens/home-screen';

export type DrawerParamList = {
  HomeScreen: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export const DrawerNavigator: React.FunctionComponent<
  DrawerNavigationProp<DrawerParamList>
> = () => {
  return (
    <Drawer.Navigator
      backBehavior="initialRoute"
      screenOptions={() => ({
        gestureEnabled: true,
        swipeEdgeWidth: -10,
        headerTintColor: 'white',
        headerStyle: {
          backgroundColor: '#212121',
        },
        headerTitleAlign: 'center',
      })}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
