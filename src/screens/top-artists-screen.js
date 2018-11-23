import React from 'React';
import {connect} from 'react-redux';
import {Image, Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {getTopArtists} from '../actions/top-artists-actions';

export class TopArtists extends React.Component{

  
  displayResults = () => {
return( 
  <ScrollView>
    {this.props.artists.map((item,index)=>{
      return <View key={index} >
      <Text>{item.name}</Text>
      <Image
        style={{width: 200, height: 200}}
        source={{uri: item.images[1].url}}
          />
      </View>
    })}
  </ScrollView>
)
  }


  render(){

   return(
    <View>
    <FontAwesome name="spotify" color="#2FD566" size={90} />
    <TouchableOpacity  
    style={styles.button} 
    onPress={()=>this.props.dispatch(getTopArtists())}>
    <Text style={styles.buttonText}>Get Top Data</Text>
    </TouchableOpacity>

    {this.props.artists?this.displayResults():
    <ScrollView>
      <Text>
        Press the button to get your top Artists for the last 6 months
        </Text>
        </ScrollView>}
    </View>
   )
  }
}

const mapStateToProps = (state)=>{
  return {
    state:state,
    user: state.user.userInfo,
    token:state.user.token,
    error:state.user.didError,
    artists:state.topArtists.topArtists

	};
}

export default connect(mapStateToProps)(TopArtists);


const styles = StyleSheet.create({

  button: {
    backgroundColor: '#2FD566',
    padding: 20,
    width:170,
    height: 50
  },
  buttonText: {
    color: '#000',
    fontSize: 15,
  }
});