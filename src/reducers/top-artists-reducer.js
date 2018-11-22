import {SET_TOP_ARTISTS} from '../actions/top-artists-actions';

const initialState={
topArtists:null,
artistsError:null
};

const topArtistsReducer = (state=initialState, action)=>{
if(action.type===SET_TOP_ARTISTS){
  return Object.assign({}, state, {topArtists: action.artists});
}
return state
}

export default topArtistsReducer;