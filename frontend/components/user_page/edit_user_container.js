import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditForm from './edit_user';
import { fetchUser, updateUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

  const artistId = parseInt(ownProps.match.params.artistId);
  return {
    currentUser: state.session.currentUser,
    artistId,
    artist: state.entities.users[artistId]
  };
};


const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm));
