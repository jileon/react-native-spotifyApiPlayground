import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import {requestSpotifyAuth} from '../actions/login-action';

export class LogIn extends React.Component {
componentDidMount(){
  console.log('component mouts Login')
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
			<View style={styles.container}>
        <FontAwesome name="spotify" color="#2FD566" size={128} />
				<TouchableOpacity
					style={styles.button}
					onPress={()=>this.props.dispatch(requestSpotifyAuth())}
					>
					<Text style={styles.buttonText}>Login with Spotify</Text>
				</TouchableOpacity>
        
			</View>

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