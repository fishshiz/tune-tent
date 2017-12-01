import React from 'react';
import { connect } from 'react-redux';
import { fetchAlbum } from '../../actions/album_actions';
import { fetchTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router';
import AlbumPage from './album';

const mapStateToProps = (state, ownProps) => {
  const albumId = parseInt(ownProps.match.params.albumId);
  return {
    albumId,
    album: state.entities.albums[albumId],
    track: state.entities.tracks,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: id => dispatch(fetchAlbum(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumPage));
