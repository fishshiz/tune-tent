import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
import { receiveAlbum } from './album_actions';

export const createTrack = track => dispatch => (
  TrackAPIUtil.createTrack(track).
  then(album => (dispatch(receiveAlbum(album))))
);

export const fetchTracks = albumId => dispatch => (
  TrackAPIUtil.fetchTracks(albumId).
  then(tracks => dispatch(receiveTracks(tracks)))
);

const receiveTrack = track => ({
  type: RECEIVE_TRACK,
  track
});

const receiveTracks = tracks => ({
  type: RECEIVE_TRACKS,
  tracks
});
