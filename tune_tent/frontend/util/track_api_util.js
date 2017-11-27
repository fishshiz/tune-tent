export const createTrack = (track) => {
  $.ajax({
    url: `api/albums/${track.album_id}/tracks`,
    method: 'POST',
    track
  });
};

export const fetchTracks = (albumId) => {
  $.ajax({
    url: `api/albums/${albumId}/tracks`,
    method: 'GET'
  });
};
