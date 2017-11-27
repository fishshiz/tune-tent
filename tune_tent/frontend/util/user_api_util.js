import { receiveUser } from '../actions/user_actions';

export const fetchUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'GET',
    id
  })
);

export const fetchUsers = () => (
  $.ajax({
    url: `api/users`,
    method: 'GET',
  })
);

export const updateUser = user => (
  $.ajax({
    url: `api/users/${user.id}`,
    method: 'PATCH',
    processData: false,
    contentType: false,
    data: user,
  })
);

export const deleteUser = id => (
  $.ajax({
    url: `api/users/${id}`,
    method: 'DELETE',
    id
  })
);
