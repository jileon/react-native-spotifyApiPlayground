import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Dashboard from '../screens/dashboard';
import {  StyleSheet, Text, View} from 'react-native';
import TopArtists from '../screens/top-artists-screen';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Profile: { screen: Dashboard },
  MyTopTen: { screen: TopArtists},
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);
