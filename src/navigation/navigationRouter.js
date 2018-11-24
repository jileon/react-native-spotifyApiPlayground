import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Dashboard from '../screens/dashboard';
import {  StyleSheet, Text, View} from 'react-native';
import TopArtists from '../screens/top-artists-screen';
import {LinearGradient} from 'expo';

class TopTracks extends React.Component {
  render() {
    return (
      <LinearGradient 
      colors={['#262837', '#01070F']}
      style={styles.container} >
      
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color:'white', alignItems: 'center' }}>
        WORK IN PROGRESS. Coming Soon </Text>
      </View>
      </LinearGradient>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Profile: { screen: Dashboard },
  MyTopTen: { screen: TopArtists},
 TopTracks: { screen: TopTracks},
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});