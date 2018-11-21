import axios from 'axios';
import {AuthSession} from 'expo';


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

console.log('hello', 26)
  // let scopes = 'user-read-private user-read-email';
  let results;
  let redirectUrl = AuthSession.getRedirectUrl();
  console.log(redirectUrl, 'redirectUrl')
    
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
      dispatch(saveUserToken(results.params.access_token));
      dispatch(authenticateUser(data));
    })
    .catch(error=>console.log(error))
  }
    });
};
