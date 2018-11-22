import axios from 'axios';
import {AuthSession} from 'expo';
import { AsyncStorage } from 'react-native';

const GET_URL = 'https://api.spotify.com/v1/me/top/artists';


export const SET_TOP_ARTISTS = 'SET_TOP_ARTISTS';
export const setTopArtists=artists=>{
  return{
    type: SET_TOP_ARTISTS,
    artists
  }
};

export const getTopArtists = (token)=>dispatch=>{
  console.log('get top data works');
  try{
    AsyncStorage.getItem('Token')
    .then(res=>{
      console.log(res, 'TOKEN IS MAIN.JS LINE  26 top Artists actions');
        axios.get(`${GET_URL}`, {
        headers: {
        Authorization: `Bearer ${res}`
        },
        params: {
          time_range: 'medium_term',
          limit: 10
        },
    })
    .then(({data})=>{
      console.log(data.items, data);
      console.log(data.items[0].name, 26);
      console.log(data.items[0].images[2], 27);
      dispatch(setTopArtists(data.items))
    })
    .catch(error=>console.log(error))
    })
  }
  catch(error){
    console.log(error);
}
}



