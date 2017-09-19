import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getTeamsSuccess = teams => {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams: teams
  }
}

// Async actions - connect to Rails API

export const getTeams = (router) => {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch(getTeamsSuccess(teams)))
      .catch(error => console.log(error));
  }
}