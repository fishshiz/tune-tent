import { combineReducers } from 'redux';

import users from './user_reducer';
import albums from './album_reducer';
import tracks from './tracks_reducer';
import player from './player_reducer';
import searches from './search_reducer';


export default combineReducers({
  users,
  albums,
  tracks,
  player,
  searches
});
