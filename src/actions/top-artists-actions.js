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


export const getTopArtists = (token)=>dispatch=>{
  console.log('get top data works');
  try{
    AsyncStorage.getItem('Token')
    .then(res=>{
      console.log(res, 'TOKEN IS MAIN.JS LINE  26 top Artists actions');
        axios.get(`https://api.spotify.com/v1/me/top/artists`, {
      headers: {
        Authorization: `Bearer ${res}`
      }
    })
    .then(({data})=>{
      console.log(data, data)
    })
    .catch(error=>console.log(error))
    })
  }
  catch(error){
    console.log(error);
}
}



