import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getUsersSuccess = users => {
  return {
    type: 'GET_USERS_SUCCESS',
    users: users
  }
}


// Async actions - connect to Rails API

export const getUsers = () => {
  return dispatch => {
    return fetch(`${API_URL}/users`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(users => dispatch(getUsersSuccess(users)))
      .catch(error => console.log(error));
  }
}

export const upgradeUser = (userId) => {
  return dispatch => {
    return fetch(`${API_URL}/users/${userId}/upgrade`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
        }
    })
      .then(response => response.json())
      .then(users => dispatch(getUsersSuccess(users)))
      .catch(error => console.log(error));
  }
}

export const downgradeUser = (userId) => {
  return dispatch => {
    return fetch(`${API_URL}/users/${userId}/downgrade`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(users => dispatch(getUsersSuccess(users)))
      .catch(error => console.log(error));
  }
}