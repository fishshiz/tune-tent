import * as AlbumAPIUtil from '../util/album_api_util';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';

export const fetchAlbum = id => dispatch => (
  AlbumAPIUtil.fetchAlbum(id).
  then(album => (dispatch(receiveAlbum(album))))
);

export const createAlbum = album => dispatch => (
  AlbumAPIUtil.createAlbum(album).
  then(album => (dispatch(receiveAlbum(album))))
);

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});
