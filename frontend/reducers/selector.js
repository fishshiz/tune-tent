import values from 'lodash/values';
export const selectArtist = ({ users }, id) => {
  const artist = users[id] || {};
  return artist;
};

export const selectAlbums = (state, user) => {
  return user ? user.albums.map(id => state.entities.albums[id]) : [];
};


export const searchResults = state => (
  values(state.entities.searches)
);