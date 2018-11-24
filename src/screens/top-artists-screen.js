import React from 'React';
import { connect } from 'react-redux';
import { Image, Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { getTopArtists } from '../actions/top-artists-actions';
import { LinearGradient } from 'expo';

export class TopArtists extends React.Component {
	displayResults = () => {
		return (
      <ScrollView >
   
      <View style={styles.header}>
      <Text style={styles.text}>Top artists for {this.props.user.display_name}</Text>
      </View>
  
					{this.props.artists.map((item, index) => {
						return (
							<View key={index} style={styles.artistCard}>
								<Text style={styles.text}>{item.name}</Text>
								<Image style={{ width: 200, height: 200 }} source={{ uri: item.images[1].url }} />
							</View>
						);
					})}
      </ScrollView>
		);
  };
  
  displayIntro=()=>{
    return(
      <LinearGradient  colors={['#262837', '#01070F']} style={styles.container}>
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.props.dispatch(getTopArtists())}>
          <Text style={styles.buttonText}>Get your top Artists</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
    )
  }

	render() {
		return (
			<LinearGradient colors={['#262837', '#01070F']} style={styles.container}>
       {this.props.artists ? this.displayResults() : this.displayIntro()}
			</LinearGradient>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state,
		user: state.user.userInfo,
		token: state.user.token,
		error: state.user.didError,
		artists: state.topArtists.topArtists
	};
};

export default connect(mapStateToProps)(TopArtists);

const styles = StyleSheet.create({

	container: {
		flexDirection: 'column',
		// backgroundColor: 'black',
		flex: 1,
		alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop:20,
	},
	button: {
		backgroundColor: '#2FD566',
		marginTop: 20,
		padding: 20
	},
	buttonText: {
		// color: '#000',
		// fontSize: 15,
  },
  header:{
    marginTop:20,
    marginBottom:20
  },
  text:{
    color:'white',
    padding:20
  },
  artistCard:{
    marginTop:20,
    marginBottom:20,
    borderStyle:'solid',
    borderColor: 'white',
    borderWidth:7,
    padding:20
  }
});
