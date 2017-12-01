import merge from 'lodash/merge';
export const createTrack = track => {
  return $.ajax({
    url: `api/albums/${track.album_id}/tracks`,
    method: 'POST',
    contentType: false,
    processData: false,
    dataType: 'json',
    data: track
  });
};

export const fetchTracks = albumId => {
  $.ajax({
    url: `api/albums/${albumId}/tracks`,
    method: 'GET'
  });
};
