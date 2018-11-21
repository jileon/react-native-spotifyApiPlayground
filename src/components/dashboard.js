import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { AuthSession } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';


const CLIENT_ID = '0154bf77a3e1412aac6e18560b175651';


export default class Dashboard extends React.Component {
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
    { return this.state.userInfo ? (
      <View style={styles.userInfo}>
        <Image
          style={styles.profileImage}
          source={ {'uri': this.state.userInfo.images[0].url} }
        />
        <View>
          <Text style={styles.userInfoText}>
            Username:
          </Text>
          <Text style={styles.userInfoText}>
            {this.state.userInfo.id}
          </Text>
          <Text style={styles.userInfoText}>
            Email:
          </Text>
          <Text style={styles.userInfoText}>
            {this.state.userInfo.email}
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

	handleSpotifyLogin = async () => {
    let scopes = 'user-read-private user-read-email';
    let redirectUrl = AuthSession.getRedirectUrl();
    let results = await AuthSession.startAsync({
      authUrl: 'https://accounts.spotify.com/authorize?client_id='+CLIENT_ID+
      '&redirect_uri='+redirectUrl+'&scope=user-top-read&response_type=token'
    });

		if (results.type !== 'success') {
			this.setState({ didError: true });
		} else {
	     axios.get(`	https://api.spotify.com/v1/me`, {
				headers: {
					Authorization: `Bearer ${results.params.access_token}`
				}
      })
      .then(({data})=>{
        this.setState({token: results.params.access_token});
        console.log(results, 'results');
        this.setState({ userInfo: data });
      })
      
      .catch(error=>console.log(error))
    }
  };
  
  handleTopData =async () => {

    console.log('hello')
    axios.get(`	https://api.spotify.com/v1/me`, {
				headers: {
					Authorization: `Bearer ${this.state.token}`
				}
      })
      .then(({data})=>{
        console.log(data)
      })
      .catch(error=>console.log(error))
  };

  buttonWorks=async () => {

      console.log('hello');
      console.log(this.state.token);
      axios.get(`https://api.spotify.com/v1/me/top/artists`, {
      		headers: {
      			Authorization: `Bearer ${this.state.token}`
      		}
        })
        .then(({data})=>{
          console.log(data)
        })
        .catch(error=>console.log(error))
  }
  

	render() {

		return (
     
			<View style={styles.container}>
				<FontAwesome name="spotify" color="#2FD566" size={128} />

				<TouchableOpacity
					style={styles.button}
					onPress={this.handleSpotifyLogin}
					disabled={

							this.state.userInfo ? true :
							false
					}
				>
					<Text style={styles.buttonText}>Login with Spotify</Text>
				</TouchableOpacity>


         <TouchableOpacity 
        style={styles.button}
        onPress={this.buttonWorks}
        
        >
          <Text style={styles.buttonText}>Get Top Data</Text>
          </TouchableOpacity>
       
				{
					this.state.didError ? this.displayError() :
          this.displayResults()}
			</View>

		);
	}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
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