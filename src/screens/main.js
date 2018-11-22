import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';
import LogIn from './login-screen';
import TabNavigator from '../navigation/navigationRouter';
import {AsyncStorage} from 'react-native';
import {tokenExists} from '../actions/login-action';


export class Main extends React.Component{
  componentDidMount(){
      try{
        AsyncStorage.getItem('Token')
        .then(res=>{
          this.props.dispatch(tokenExists(res))
        })
      }
      catch(error){
        console.log(error);
    }
    }
  
  render(){
      if(this.props.loggedIn){
        return(<TabNavigator/>);
      }
      return <LogIn/>
     
  }
}
const mapStateToProps = (state)=>{
  return{
    loggedIn: state.user.loggedIn
  }
}
export default connect(mapStateToProps)(Main);