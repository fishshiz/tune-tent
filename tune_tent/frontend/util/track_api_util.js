export const createTrack = (track, albumId) => {
  $.ajax({
    url: `api/albums/${albumId}/tracks`,
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
