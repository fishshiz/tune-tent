export const fetchAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`,
    method: 'GET',
    id
  })
);

export const fetchAlbums = artistId => (
  $.ajax({
    url: 'api/albums',
    method: 'GET',
    artistId
  })
);

export const createAlbum = album => (
  $.ajax({
    url: 'api/albums',
    method: 'POST',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: album
  })
);
