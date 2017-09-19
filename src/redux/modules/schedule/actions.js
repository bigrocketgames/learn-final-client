import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getScheduleSuccess = schedule => {
  return {
    type: 'GET_SCHEDULE_SUCCESS',
    schedule: schedule
  }
}

// Async actions - connect to Rails API

export const getSchedule = (schedule_url) => {
  return dispatch => {
    return fetch(`${API_URL}${schedule_url}`)
      .then(response => response.json())
      .then(schedule => dispatch(getScheduleSuccess(schedule)))
      .catch(error => console.log(error));
  }
}