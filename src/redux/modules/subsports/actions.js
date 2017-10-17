import 'isomorphic-fetch';
import {reset, SubmissionError} from 'redux-form';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getSubSportsSuccess = subSports => {
  return {
    type: 'GET_SUB_SPORTS_SUCCESS',
    subSports: subSports
  }
}

export const addSubSportSuccess = (subSport) => {
  return {
    type: 'ADD_SUB_SPORT_SUCCESS',
    subSport: subSport
  }
}

export const removeSubSportSuccess = (subSport) => {
  return {
    type: 'REMOVE_SUB_SPORT_SUCCESS',
    subSportId: subSport.id
  }
}


// Async actions - connect to Rails API

export const getSubSports = () => {
  return dispatch => {
    return fetch(`${API_URL}/sub_sports`)
      .then(response => response.json())
      .then(subSports => dispatch(getSubSportsSuccess(subSports)))
      .catch(error => console.log(error));
  }
}

export const getSubSport = (sub_sport_route) => {
  return dispatch => {
    return fetch(`${API_URL}${sub_sport_route}`)
      .then(response => response.json())
      .then(subSports => dispatch(getSubSportsSuccess(subSports)))
      .catch(error => console.log(error))
  }
}

export const addSubSport = (subSportDetails) => {
  return dispatch => {
    return fetch(`${API_URL}/sub_sports`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      },
      body: JSON.stringify({sub_sport: subSportDetails})
    })
      .then(response => response.json())
      .then(subSport => {
        dispatch(addSubSportSuccess(subSport));
        dispatch(reset('addSubSport'));
      })
      .catch(err => {
        throw new SubmissionError(err);
      })
  }
}

export const deleteSubSport = (subSportId) => {
  return dispatch => {
    return fetch(`${API_URL}/sub_sports/${subSportId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(subSport => dispatch(removeSubSportSuccess(subSport)))
      .catch(error => console.log(error));
  }
}