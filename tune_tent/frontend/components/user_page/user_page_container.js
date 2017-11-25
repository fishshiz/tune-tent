import { connect } from 'react-redux';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import UserPage from './user_page';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {

  const artistId = parseInt(ownProps.match.params.artistId);
// console.log(state.entities.users[artistId]);
  return {

    artist: state.entities.users[artistId]
  };
};


const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage));
