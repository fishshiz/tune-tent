import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_ALBUM, RECEIVE_ALBUMS } from '../actions/album_actions';

const albumReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALBUM:
      const selectedAlbum = {[action.album.id]: action.album };
      return merge({}, state, selectedAlbum);
    case RECEIVE_USER:
      return action.user.albums;
    case RECEIVE_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};

export default albumReducer;
