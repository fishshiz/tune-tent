import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';

import EditButton from './edit_button';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  const artistId = parseInt(ownProps.match.params.artistId);
  return {
    currentUser: state.session.currentUser,
    artistId
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditButton));
