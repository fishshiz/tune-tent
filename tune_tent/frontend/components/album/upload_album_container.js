import { connect } from 'react-redux';
import UploadForm from './upload_album';
import { createAlbum } from '../../actions/album_actions';
import { createTracks } from '../../actions/track_actions';

const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser,
    track: state.entities.tracks
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  createTracks: tracks => dispatch(createTracks(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
