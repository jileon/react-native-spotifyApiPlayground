import axios from 'axios';
import {AuthSession} from 'expo';
import { AsyncStorage } from 'react-native';

const CLIENT_ID='0154bf77a3e1412aac6e18560b175651';
export const AUTHENITICATE_USER = 'AUTHENITICATE_USER';
export const authenticateUser = userInfo=>({
type:AUTHENITICATE_USER,
userInfo
});

export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const authenticationError = ()=>({
  type:AUTHENTICATION_ERROR
});

export const USER_TOKEN = 'USER_TOKEN';
export const saveUserToken=(token)=>({
  type:USER_TOKEN,
  token
});


export const requestSpotifyAuth = ()=>dispatch => {

  // let scopes = 'user-read-private user-read-email';
  let results;
  let redirectUrl = AuthSession.getRedirectUrl();
  // console.log(redirectUrl, 'redirectUrl')
    
  AuthSession.startAsync({
    authUrl: 'https://accounts.spotify.com/authorize?client_id='+CLIENT_ID+
    '&redirect_uri='+redirectUrl+'&scope=user-top-read&response_type=token'
  })
  .then(res=>{
    results=res

    return results
  })
    .then(res=>{
      if (res.type !== 'success') {
    console.log('error')
   dispatch(authenticationError());
  } else {
     axios.get(`	https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${results.params.access_token}`
      }
    })
    .then(({data})=>{
      console.log(data);
      dispatch(saveUserToken(results.params.access_token));
      dispatch(authenticateUser(data));      
    })
    .then(()=>{
      try {
        AsyncStorage.setItem('Token', results.params.access_token);
      } catch (error) {
       console.log(error);
      }
    })
    .then(()=>{
      try{
        return AsyncStorage.getItem('Token')
      }
      catch(error){
        console.log(error);
      }
      
    })
    .then(res=>console.log(res, 'TOKEN IS LOGIN-ACTION LINE 71'))
    .catch(error=>console.log(error))
  }
    });
};

export const tokenExists=(token)=>dispatch=>{

  // console.log('token exists works');

  axios.get(`	https://api.spotify.com/v1/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(({data})=>{
      // console.log(data, 'data with token already provided'); 
      console.log(data);
      return dispatch(authenticateUser(data));
      
    })
    // .then(res=>console.log(res, 'RES IS LOGIN-ACTION LINE 89'))
    .catch(error=>console.log(error))
  }
