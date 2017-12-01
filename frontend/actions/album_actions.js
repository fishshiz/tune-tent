import * as AlbumAPIUtil from '../util/album_api_util';
export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';

export const fetchAlbum = id => dispatch => (
  AlbumAPIUtil.fetchAlbum(id).
  then(album => (dispatch(receiveAlbum(album))))
);

export const fetchAlbums = artistId => dispatch => (
  AlbumAPIUtil.fetchAlbums(artistId).
  then(albums => dispatch(receiveAlbums(albums)))
);

export const createAlbum = form => dispatch => (
  AlbumAPIUtil.createAlbum(form).
  then(album => (dispatch(receiveAlbum(album))))
);

export const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

const receiveAlbums = albums => ({
  type: RECEIVE_ALBUMS,
  albums
});
