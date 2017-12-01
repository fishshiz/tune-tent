import { connect } from 'react-redux';
import UploadTrack from './upload_track';
import { createTrack } from '../../actions/track_actions';
import { withRouter } from 'react-router';
import { fetchAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {

  const albumId = parseInt(ownProps.match.params.albumId);
  return {
    currentUser: state.session.currentUser,
    album: state.entities.albums[albumId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const albumId = parseInt(ownProps.match.params.albumId);
  return {
    createTrack: track => dispatch(createTrack(track)),
    fetchAlbum: albumId => dispatch(fetchAlbum(albumId))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadTrack));
