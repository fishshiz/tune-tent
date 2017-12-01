import * as TrackAPIUtil from '../util/track_api_util';
import { receiveTrack } from './track_actions';
export const PLAY_TRACK = "PLAY_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

export const fetchTrack = id => dispatch => (
  TrackAPIUtil.fetchTrack(id).then(track => {
    dispatch(receiveTrack(track));
  })
);

const playTrack = () => ({
  type: PLAY_TRACK
});

const pauseTrack = () => ({
  type: PAUSE_TRACK
});
