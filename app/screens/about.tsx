import * as React from 'react';
import {Button, View} from 'react-native';

export const About = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go to Home" />
    </View>
  );
};
