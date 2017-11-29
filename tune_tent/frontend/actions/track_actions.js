import * as TrackAPIUtil from '../util/track_api_util';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const createTracks = tracks => dispatch => (
  TrackAPIUtil.createTracks(tracks).
  then(track => (dispatch(receiveTrack(track))))
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
