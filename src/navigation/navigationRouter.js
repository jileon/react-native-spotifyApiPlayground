import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Dashboard from '../screens/dashboard';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import getTopArtists from '../actions/top-artists-actions';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class TopTen extends React.Component{
//   buttonWorks= () => {

//     console.log('hello');
//     console.log(this.props.token);
//     axios.get(`https://api.spotify.com/v1/me/top/artists`, {
//         headers: {
//           Authorization: `Bearer ${this.props.token}`
//         }
//       })
//       .then(({data})=>{
//         console.log(data, data)
//       })
//       .catch(error=>console.log(error))
// }

  render(){
    return(
      <View>
      <FontAwesome name="spotify" color="#2FD566" size={128} />
      <TouchableOpacity  style={styles.button} onPress={()=>console.log('buttonWorks')}>
      <Text style={styles.buttonText}>Get Top Data</Text>
      </TouchableOpacity>
      </View>
    )
  
  }
  }




const TabNavigator = createBottomTabNavigator({
  Profile: { screen: Dashboard },
  MyTopTen: { screen: TopTen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: '#2FD566',
    padding: 20
  },
  buttonText: {
    color: '#000',
    fontSize: 20
  },
  userInfo: {
    height: 250,
    width: 200,
    alignItems: 'center',
  },
  userInfoText: {
    color: '#fff',
    fontSize: 18
  },
  errorText: {
    color: '#fff',
    fontSize: 18
  },
  profileImage: {
    height: 64,
    width: 64,
    marginBottom: 32
  }
});