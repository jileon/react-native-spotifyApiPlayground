import axios from 'axios';
import {AuthSession} from 'expo';
import { AsyncStorage } from 'react-native';

let token;
const getToken = ()=>{
  try{
    AsyncStorage.getItem('Token')
    .then(res=>token=res)
  }
  catch(error){
    console.log(error);
}
}

export const GET_TOP_ARTISTS = 'GET_TOP_ARTISTS';
export const getTopArtists = ()=>dispatch=>{
  console.log('hello');
console.log(token);
  // axios.get(`https://api.spotify.com/v1/me/top/artists`, {
  //     headers: {
  //       Authorization: `Bearer ${this.props.token}`
  //     }
  //   })
  //   .then(({data})=>{
  //     console.log(data, data)
  //   })
  //   .catch(error=>console.log(error))
}


// buttonWorks=async () => {

//   console.log('hello');
//   console.log(this.props.token);
//   axios.get(`https://api.spotify.com/v1/me/top/artists`, {
//       headers: {
//         Authorization: `Bearer ${this.props.token}`
//       }
//     })
//     .then(({data})=>{
//       console.log(data)
//     })
//     .catch(error=>console.log(error))
// }
