import merge from 'lodash/merge';
import { PLAY_TRACK, PAUSE_TRACK } from '../actions/player_actions';
import { RECEIVE_TRACK, RECEIVE_TRACKS } from '../actions/track_actions';

const playerState = {
  playing: false,
  currentTrack: {
    title: ''
  }
};

export const PlayerReducer = (state = playerState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case PLAY_TRACK:
      return merge({}, state, { playing: true });
    case PAUSE_TRACK:
      return merge({}, state, { playing: false });
    case RECEIVE_TRACK:
      return merge({}, state, { currentTrack: action.track });
    default:

  }
};
