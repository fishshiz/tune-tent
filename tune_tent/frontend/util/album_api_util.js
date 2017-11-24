export const fetchAlbum = id => (
  $.ajax({
    url: `api/albums/${id}`,
    method: 'GET',
    id
  })
);

export const createAlbum = data => (
  $.ajax({
    url: 'api/albums',
    method: 'POST',
    data
  })
);
