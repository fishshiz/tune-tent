import merge from 'lodash/merge';
export const createTracks = tracks => {
  $.ajax({
    url: `api/albums/${tracks.album_id}/tracks`,
    method: 'POST',
    data: merge({}, tracks)
  });
};

export const fetchTracks = albumId => {
  $.ajax({
    url: `api/albums/${albumId}/tracks`,
    method: 'GET'
  });
};
