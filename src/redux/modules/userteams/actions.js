import 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export const getUserTeamsSuccess = userTeams => {
  return{
    type: 'GET_USERTEAMS_SUCCESS',
    userTeams: userTeams
  }
}

export const updateUserTeamSuccess = (userTeam) => {
  return {
    type: 'UPDATE_USERTEAM_SUCCESS',
    userTeam: userTeam
  }
}

export const addUserTeam = (userTeamDetails) => {
  return dispatch => {
    return fetch(`${API_URL}/user_teams`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      },
      body: JSON.stringify({ user_team: userTeamDetails })
    })
      .then(response => response.json())
      .then(userTeams => dispatch(getUserTeamsSuccess(userTeams)))
      .catch(error => console.log(error));
  }
}

export const getUserTeams = () => {
  return dispatch => {
    return fetch(`${API_URL}/user_teams`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(userTeams => dispatch(getUserTeamsSuccess(userTeams)))
      .catch(error => console.log(error));
  }
}

export const removeUserTeam = (userTeamID) => {
  return dispatch => {
    return fetch(`${API_URL}/user_teams/${userTeamID}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(userTeams => dispatch(getUserTeamsSuccess(userTeams)))
      .catch(error => console.log(error));
  }
}

export const addLike = (userTeamId) => {
  debugger
  return dispatch => {
    return fetch(`${API_URL}/user_teams/${userTeamId}/like`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(userTeam => dispatch(updateUserTeamSuccess(userTeam)))
      .catch(error => console.log(error));
  }
}