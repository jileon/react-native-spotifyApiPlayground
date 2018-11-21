import axios from 'axios';
import {CLIENT_ID} from '../config'


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


// export const authenticateUser = async () => {
//   let scopes = 'user-read-private user-read-email';
//   let redirectUrl = AuthSession.getRedirectUrl();
//   let results = await AuthSession.startAsync({
//     authUrl: 'https://accounts.spotify.com/authorize?client_id='+CLIENT_ID+
//     '&redirect_uri='+redirectUrl+'&scope=user-top-read&response_type=token'
//   });

//   if (results.type !== 'success') {
//     this.setState({ didError: true });
//   } else {
//      axios.get(`	https://api.spotify.com/v1/me`, {
//       headers: {
//         Authorization: `Bearer ${results.params.access_token}`
//       }
//     })
//     .then(({data})=>{
//       this.setState({token: results.params.access_token});
//       console.log(results, 'results');
//       this.setState({ userInfo: data });
//     })
    
//     .catch(error=>console.log(error))
//   }
// };
