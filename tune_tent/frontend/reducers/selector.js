export const selectArtist = ({ users }, id) => {
  const artist = users[id] || {};
  return artist;
};

export const selectAlbums = (state, user) => {
  return user ? user.albums.map(id => state.entities.albums[id]) : [];
};
