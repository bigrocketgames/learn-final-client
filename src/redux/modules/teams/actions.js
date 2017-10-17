import 'isomorphic-fetch';
import {reset, SubmissionError} from 'redux-form';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getTeamsSuccess = teams => {
  return {
    type: 'GET_TEAMS_SUCCESS',
    teams: teams
  }
}

export const addTeamSuccess = (team) => {
  return {
    type: 'ADD_TEAM_SUCCESS',
    team: team
  }
}

export const removeTeamSuccess = (team) => {
  return {
    type: 'REMOVE_TEAM_SUCCESS',
    teamId: team.id
  }
}

// Async actions - connect to Rails API

export const getTeams = () => {
  return dispatch => {
    return fetch(`${API_URL}/teams`)
      .then(response => response.json())
      .then(teams => dispatch(getTeamsSuccess(teams)))
      .catch(error => console.log(error));
  }
}

export const getTeam = (team_url) => {
  return dispatch => {
    return fetch(`${API_URL}${team_url}`)
      .then(response => response.json())
      .then(teams => dispatch(getTeamsSuccess(teams)))
      .catch(error => console.log(error));
  }
}

export const addTeam = (teamDetails) => {
  return dispatch => {
    return fetch(`${API_URL}/teams`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      },
      body: JSON.stringify({team: teamDetails})
    })
      .then(response => response.json())
      .then(team => {
        dispatch(addTeamSuccess(team));
        dispatch(reset('addTeam'));
      })
      .catch(err => {
        throw new SubmissionError(err);
      })
  }
}

export const deleteTeam = (teamId) => {
  return dispatch => {
    return fetch(`${API_URL}/teams/${teamId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(team => dispatch(removeTeamSuccess(team)))
      .catch(error => console.log(error));
  }
}