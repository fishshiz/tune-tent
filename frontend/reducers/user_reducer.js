import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import merge from 'lodash/merge';

const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const newState = {[action.user.id]: action.user};
      return merge({}, state, newState);
    case RECEIVE_USERS:
      return action.users;
    default:
      return state;
  }
};

export default userReducer;
