import { connect } from 'react-redux';
import UploadForm from './upload_album';
import { createAlbum } from '../../actions/album_actions';
import { createTrack } from '../../actions/track_actions';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    track: state.entities.tracks
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album)),
  createTrack: track => dispatch(createTrack(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm);
