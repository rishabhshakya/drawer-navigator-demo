/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {useNavigationContainerRef} from '@react-navigation/native';
import React from 'react';
import {RootNavigator, RootParamList} from './app/navigation/root-navigator';
import 'react-native-gesture-handler';
import 'react-native-reanimated';

const App = () => {
  const navigationRef = useNavigationContainerRef<RootParamList>();

  return <RootNavigator navigationRef={navigationRef} />;
};

export default App;
