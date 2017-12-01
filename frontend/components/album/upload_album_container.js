import { connect } from 'react-redux';
import UploadForm from './upload_album';
import { createAlbum } from '../../actions/album_actions';
import { createTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createAlbum: album => dispatch(createAlbum(album))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadForm));
