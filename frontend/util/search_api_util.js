export const searchMusicDatabase = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_search',
    data: { search: { query }}
  });
};
