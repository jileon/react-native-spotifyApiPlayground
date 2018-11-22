import React from 'React';
import {connect} from 'react-redux';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import getTopArtists from '../actions/top-artists-actions';

export class TopArtists extends React.Component{
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

const mapStateToProps = (state)=>{
  return {
    state:state,
    user: state.user.userInfo,
    token:state.user.token,
    error:state.user.didError
	};
}

export default connect(mapStateToProps)(TopArtists);


const styles = StyleSheet.create({

  button: {
    backgroundColor: '#2FD566',
    padding: 20
  },
  buttonText: {
    color: '#000',
    fontSize: 20
  }
});