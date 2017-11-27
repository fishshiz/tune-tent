import { combineReducers } from 'redux';

import users from './user_reducer';
import albums from './album_reducer';
import tracks from './tracks_reducer';

export default combineReducers({
  users,
  albums,
  tracks
});
