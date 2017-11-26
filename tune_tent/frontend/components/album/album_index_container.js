import React from 'react';
import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums } from '../../actions/album_actions';
import { withRouter } from 'react-router';
import { selectAlbums } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.artistId);
  return {
    artistId,
    album: selectAlbums(state, parseInt(ownProps.match.params.albumId))
  };

};

const mapDispatchToProps = dispatch => ({
  fetchAlbums: artistId => dispatch(fetchAlbums(artistId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex));
