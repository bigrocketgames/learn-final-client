import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getSportsSuccess = sports => {
  return {
    type: 'GET_SPORTS_SUCCESS',
    sports: sports
  }
}


// Async actions - connect to Rails API

export const getSports = (router) => {
  return dispatch => {
    return fetch(`${API_URL}/sports`)
      .then(response => response.json())
      .then(sports => dispatch(getSportsSuccess(sports)))
      .catch(error => console.log(error));
  }
}