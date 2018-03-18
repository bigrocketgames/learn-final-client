import 'isomorphic-fetch';
import { SubmissionError } from 'redux-form';

const API_URL = process.env.REACT_APP_API_URL;

// Async actions - connect to Rails API

export const addMessage = (messageDetails) => {
  return dispatch => {
    return fetch(`${API_URL}/chat_rooms/${messageDetails.chatRoom_id}/messages`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      },
      body: JSON.stringify({message: messageDetails})
    })
      .catch(err => {
        throw new SubmissionError(err);
      })
  }
}