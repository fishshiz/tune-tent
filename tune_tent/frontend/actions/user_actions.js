import * as UserAPIUtil from '../util/user_api_util';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).
  then(user => (dispatch(receiveUser(user))))
);

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().
  then(users => (dispatch(receiveUsers(users))))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user).
  then(user => (dispatch(receiveUser(user))))
);

export const deleteUser = id => dispatch => (
  UserAPIUtil.deleteUser(id).then(user => dispatch(receiveUser(null)))
);

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});
