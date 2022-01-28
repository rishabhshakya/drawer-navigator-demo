import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {PrimaryNavigator} from './native-stack';

export type RootParamList = {
  PrimaryStack: undefined;
};

export const RootNavigator = ({navigationRef, ...props}) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer {...props} ref={navigationRef}>
        <PrimaryNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
