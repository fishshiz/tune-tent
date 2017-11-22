import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => (
  SessionAPIUtil.login(user).
  then(currentUser => (dispatch(receiveCurrentUser(currentUser))),
  errors => (
    dispatch(receiveErrors(errors.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => (dispatch(logout())), errors => (
  dispatch(receiveErrors(errors.responseJSON)))
  )
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).
  then(currentUser => (dispatch(receiveCurrentUser(currentUser))),
  errors => (
  dispatch(receiveErrors(errors.responseJSON)))
  )
);

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
