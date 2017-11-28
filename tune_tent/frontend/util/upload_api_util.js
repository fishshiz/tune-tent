export const uploadAlbum = payload => {
  return $.ajax({
    url: '/api/upload/payload_request',
    method: 'POST',
    data: payload
  });
};
