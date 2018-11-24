import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { connect } from 'react-redux';
import {LinearGradient} from 'expo';



export class Dashboard extends React.Component {
componentDidMount(){
  console.log('componentMounts Dashboard');
}
	displayError = () => {
		return (
			<View style={styles.userInfo}>
				<Text style={styles.errorText}>There was an error, please try again.</Text>
			</View>
		);
  };
  
  displayResults = () => {
    { return this.props.user ? (
      <LinearGradient 
      colors={['#262837', '#01070F']}
      style={styles.container} >
      <View style={styles.userInfo}>
        <Image
          style={styles.profileImage}
          source={ {'uri': this.props.user.images[0].url} }
        />
        <View>
          <Text style={styles.userInfoText}>
          Hello
          </Text>
        </View>
        <View>
          <Text style={styles.userInfoText}>
          {this.props.user.display_name}!
          </Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionInfoText}>
        Click on MyTopTen on the bottom navigator to see your top 10 artists for the past six months.
          </Text>
        </View>
        
        <View>
        </View>
      </View>
      </LinearGradient>

    ) : (
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>
          Login to Spotify to see user data.
        </Text>
      </View>
          )}
  }
 



	render() {
// console.log('=====================');
// console.log(this.props.state, 'state');
// console.log('=====================');

		return (
      <LinearGradient   colors={['#262837', '#01070F']} style={styles.container}>    
				{this.props.didError ? this.displayError() : this.displayResults()} 
			</LinearGradient>

		);
	}
}

const mapStateToProps = (state) => {
	return {
    state:state,
    user: state.user.userInfo,
    token:state.user.token,
    error:state.user.didError
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
    height: 124,
    width: 124,
    marginBottom: 32
  },
  description:{
  marginTop:20
  },
  descriptionInfoText:{
    color: '#fff',
    fontSize: 15
  }
});