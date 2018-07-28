import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getSeasonsSuccess = (seasons) => {
  return {
    type: 'GET_SEASONS_SUCCESS',
    seasons
  }
}

// Async actions - connect to Rails API

export const getSeasons = () => {
  return dispatch => {
    return fetch(`${API_URL}/seasons`)
      .then(response => response.json())
      .then(seasons => {
        dispatch(getSeasonsSuccess(seasons))
      })
      .catch(error => console.log(error));
  }
}