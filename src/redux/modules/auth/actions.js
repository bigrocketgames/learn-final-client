import 'isomorphic-fetch';
import history from '../../../history';
import { reset, SubmissionError } from 'redux-form';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = user => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT_USER'
  }
}


// Async actions - connect to Rails API

export const signup = (userDetails) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
      .then(response => response.json())
      .then(body => {
        localStorage.setItem('team.schedule.token', body.token);
        localStorage.setItem('team.schedule.user_role', "user")
        dispatch(setCurrentUser(body.user));
        dispatch(reset('signup'));
        history.push("/")
      })
    .catch(err => {
      throw new SubmissionError(err);
    })
  }
}

export const login = (userDetails) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return fetch(`${API_URL}/auth`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userDetails })
    })
      .then(response => response.json())
      .then(body => {
        localStorage.setItem('team.schedule.token', body.token);
        if (body.user.admin === true) {
          localStorage.setItem('team.schedule.user_role', "admin")
        } else {
          localStorage.setItem('team.schedule.user_role', "user")
        }
        dispatch(setCurrentUser(body.user));
        dispatch(reset('login'));
        history.push("/")
      })
    .catch(err => {
      throw new SubmissionError(err);
    })
  }
}

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('team.schedule.token');
    localStorage.removeItem('team.schedule.user_role');
    dispatch(logoutUser());
    history.push("/")
  }
}