export const searchMusicDatabase = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/music_searches',
    data: { search: { query }}
  });
};
