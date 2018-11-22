import React from 'React';
import {connect} from 'react-redux';
import {Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {getTopArtists} from '../actions/top-artists-actions';

export class TopArtists extends React.Component{

  
  displayResults = () => {
return( 
  this.props.artists.map((item, index)=>{
   return( <View key={index} >
    <Text>{item.name}</Text>
  </View>)
  })

)
      
    // this.props.artists.map(item=>{
      
        
    // });
  }
  render(){
    console.log('=======State==========');
    console.log(this.props.artists);
    console.log('=======State==========');
   return(
    <View>
    <FontAwesome name="spotify" color="#2FD566" size={128} />
    <TouchableOpacity  
    style={styles.button} 
    onPress={()=>this.props.dispatch(getTopArtists())}>
    <Text style={styles.buttonText}>Get Top Data</Text>
    </TouchableOpacity>

    {this.props.artists?this.displayResults():<View><Text>Hello</Text></View>}
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
    padding: 20
  },
  buttonText: {
    color: '#000',
    fontSize: 20
  }
});