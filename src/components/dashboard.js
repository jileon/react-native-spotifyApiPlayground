import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { AuthSession } from 'expo';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import {requestSpotifyAuth, saveUserToken} from '../actions/login-action';

const CLIENT_ID = '0154bf77a3e1412aac6e18560b175651';


export class Dashboard extends React.Component {
	state = {
		userInfo: null,
    didError: false,
    token: null
	};


  
	displayError = () => {
		return (
			<View style={styles.userInfo}>
				<Text style={styles.errorText}>There was an error, please try again.</Text>
			</View>
		);
  };
  


  displayResults = () => {
    { return this.props.user ? (
      <View style={styles.userInfo}>
        <Image
          style={styles.profileImage}
          source={ {'uri': this.props.user.images[0].url} }
        />
        <View>
          <Text style={styles.userInfoText}>
            Username:
          </Text>
          <Text style={styles.userInfoText}>
            {this.props.user.id}
          </Text>
          <Text style={styles.userInfoText}>
            Email:
          </Text>
          <Text style={styles.userInfoText}>
            {this.props.user.email}
          </Text>
        </View>
      </View>
    ) : (
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>
          Login to Spotify to see user data.
        </Text>
      </View>
    )}
  }
 

  buttonWorks=async () => {

      console.log('hello');
      console.log(this.props.token);
      axios.get(`https://api.spotify.com/v1/me/top/artists`, {
      		headers: {
      			Authorization: `Bearer ${this.props.token}`
      		}
        })
        .then(({data})=>{
          console.log(data)
        })
        .catch(error=>console.log(error))
  }
  

	render() {
// console.log('=====================');
// console.log(this.props.state, 'state');
// console.log('=====================');

		return (
     
			<View style={styles.container}>
    
        <FontAwesome name="spotify" color="#2FD566" size={128} />

				<TouchableOpacity
					style={styles.button}
					onPress={()=>this.props.dispatch(requestSpotifyAuth())}
					disabled={

							this.state.userInfo ? true :
							false
					}
				>
					<Text style={styles.buttonText}>Login with Spotify</Text>
				</TouchableOpacity>


         { <TouchableOpacity 
        style={styles.button}
        onPress={this.buttonWorks}
        
        >
          <Text style={styles.buttonText}>Get Top Data</Text>
          </TouchableOpacity>
        }
				{
					this.state.didError ? this.displayError() :
          this.displayResults()} 
			</View>

		);
	}
}

const mapStateToProps = (state) => {
	return {
    state:state,
    user: state.user.userInfo,
    token:state.user.token
	};
};

export default connect(mapStateToProps)(Dashboard);

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