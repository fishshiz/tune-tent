import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserPage from './user_page';
import { withRouter } from 'react-router';
import { fethAlbums } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {

  const artistId = parseInt(ownProps.match.params.artistId);

  return {
    artistId,
    artist: state.entities.users[artistId],
    album: state.entities.albums
  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage));
