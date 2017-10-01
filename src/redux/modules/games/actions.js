import 'isomorphic-fetch';
import history from '../../../history';
import { reset, SubmissionError } from 'redux-form';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const getGamesSuccess = (games) => {
  return {
    type: 'GET_GAMES_SUCCESS',
    games: games
  }
}

// Async actions - connect to Rails API

export const getGames = () => {
  return dispatch => {
    return fetch(`${API_URL}/games`)
      .then(response => response.json())
      .then(games => dispatch(getGamesSuccess(games)))
      .catch(error => console.log(error))
  }
}

export const getGame = (gameId) => {
  return dispatch => {
    return fetch(`${API_URL}/games/${gameId}`)
      .then(response => response.json())
      .then(games => dispatch(getGamesSuccess(games)))
      .catch(error => console.log(error))
  }
}

export const updateGame = (gameDetails, gameId) => {
  return dispatch => {
    return fetch(`${API_URL}/games/${gameId}`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      },
      body: JSON.stringify({game: gameDetails})
    })
      .then(response => response.json())
      .then(games => {
        dispatch(getGamesSuccess(games))
        dispatch(reset('editGame'));
        history.push("/admin/games")
      })
      .catch(err => {
        throw new SubmissionError(err);
      })
  }
}