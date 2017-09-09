import 'isomorphic-fetch';
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


// Async actions - connect to Rails API

export const signup = (userDetails, router) => {
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
        dispatch(setCurrentUser(body.user));
        dispatch(reset('signup'));
        // router.history.replace('/home');
      })
    .catch(err => {
      throw new SubmissionError(err);
    })
  }
}

export const login = (userDetails, router) => {
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
        dispatch(setCurrentUser(body.user));
        dispatch(reset('login'));
      })
    .catch(err => {
      throw new SubmissionError(err);
    })
  }
}