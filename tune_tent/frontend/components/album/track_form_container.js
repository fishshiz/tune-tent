import { connect } from 'react-redux';
import UploadTrack from './upload_album';
import { createTracks } from '../../actions/track_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  albumId: parseInt(ownProps.match.params.albumId)
});

const mapDispatchToProps = dispatch => ({
  createTracks: tracks => dispatch(createTracks(tracks))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadTrack));
