import {AUTHENITICATE_USER, AUTHENTICATION_ERROR,USER_TOKEN} from '../actions/login-action'

const initialState =  {
userInfo: null,
didError: false,
token: null,
loggedIn:false
};
  
const userReducer = (state=initialState, action)=>{
if(action.type===AUTHENITICATE_USER){
return Object.assign({}, state, {userInfo: action.userInfo, didError: false, loggedIn:true})
}else if(action.type===AUTHENTICATION_ERROR){
return Object.assign({}, state, {didError: true, loggedIn:false})
}else if (action.type===USER_TOKEN){
  return Object.assign({}, state, {token:action.token, didError:false,loggedIn:true})
}
return state;
  }

  export default userReducer;