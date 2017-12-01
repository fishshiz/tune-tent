import merge from 'lodash/merge';
import { RECEIVE_UPLOAD } from '../actions/upload_actions';

const uploadReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_UPLOAD:
      return merge({}, state, action.upload);
    default:
      return state;
  }
};

export default uploadReducer;
