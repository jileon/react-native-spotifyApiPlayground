import {combineReducers} from 'redux';
import userReducer from './user-reducer';
import topArtistsReducer from './top-artists-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  topArtists: topArtistsReducer
});

export default rootReducer;
