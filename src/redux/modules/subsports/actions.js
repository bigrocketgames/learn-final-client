import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getSubSportsSuccess = subSports => {
  return {
    type: 'GET_SUB_SPORTS_SUCCESS',
    subSports: subSports
  }
}


// Async actions - connect to Rails API

export const getSubSports = (router) => {
  return dispatch => {
    return fetch(`${API_URL}/sub_sports`)
      .then(response => response.json())
      .then(subSports => dispatch(getSubSportsSuccess(subSports)))
      .catch(error => console.log(error));
  }
}