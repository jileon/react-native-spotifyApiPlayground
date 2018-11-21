import React from 'react';
import {connect} from 'react-redux';
import Dashboard from './dashboard';
import LogIn from './login-screen';


export class Main extends React.Component{

  render(){
      if(this.props.loggedIn){
        return(<Dashboard/>);
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