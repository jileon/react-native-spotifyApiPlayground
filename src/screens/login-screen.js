import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import {requestSpotifyAuth} from '../actions/login-action';
import {LinearGradient} from 'expo';

export class LogIn extends React.Component {
componentDidMount(){
}
	displayError = () => {
		return (
			<View style={styles.userInfo}>
				<Text style={styles.errorText}>There was an error, please try again.</Text>
			</View>
		);
  };
  
	render() {

		return (
      <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
     >
			<View>
     
        <FontAwesome name="spotify" color="#2FD566" size={168}  style={styles.spotify} />
				<TouchableOpacity
					style={styles.button}
					onPress={()=>this.props.dispatch(requestSpotifyAuth())}
					>
					<Text style={styles.buttonText}>Login with Spotify</Text>
				</TouchableOpacity>
       
			</View>
      </LinearGradient>
		);
	}
}

// const mapStateToProps = (state) => {
// 	return {
//     state:state,
//     user: state.user.userInfo,
//     token:state.user.token,
//     loggedIn: state.user.loggedIn
// 	};
// };

export default connect()(LogIn);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  spotify:{
    padding: 20
  },
  button: {
    backgroundColor: '#2FD566',
    marginTop:20,
    padding: 20,

  },
  buttonText: {
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  }
});