export const selectArtist = ({ users }, id) => {
  const artist = users[id] || {};
  return artist;
};
