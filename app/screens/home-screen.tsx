import {DrawerNavigationProp} from '@react-navigation/drawer';
import {ParamListBase} from '@react-navigation/native';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface HomeScreenProps {
  navigation?: DrawerNavigationProp<ParamListBase>;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const RenderHeaderLeft = React.useCallback(() => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation?.toggleDrawer();
        }}
        style={styles.headerLeftContainer}>
        <View style={{width: 30, height: 30, backgroundColor: 'red'}} />
      </TouchableOpacity>
    );
  }, [navigation]);

  const RenderHeaderRight = () => {
    return (
      <View style={styles.headerRightContainer}>
        <Text>Right</Text>
      </View>
    );
  };

  const Header = () => {
    return (
      <View style={styles.headerStyle}>
        <RenderHeaderLeft />
        <RenderHeaderRight />
      </View>
    );
  };

  React.useLayoutEffect(() => {
    navigation?.setOptions({header: () => <Header />});
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('About')}
        title="Go to About"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLeftContainer: {
    marginLeft: 20,
    marginTop: 50,
  },
  headerRightContainer: {
    marginTop: 50,
  },
  headerStyle: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'space-between',
    height: 80,
  },
});
