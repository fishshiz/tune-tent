import * as SessionAPIUtil from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(() => dispatch(logout()), receiveErrors());
);

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});
