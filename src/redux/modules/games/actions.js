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

export const createGameSuccess = (game) => {
  return {
    type: 'CREATE_GAME_SUCCESS',
    game: game
  }
}

export const removeGameSuccess = (game) => {
  return {
    type: 'REMOVE_GAME_SUCCESS',
    gameId: game.id
  }
}

export const updateGameSuccess = (game) => {
  return {
    type: 'UPDATE_GAME_SUCCESS',
    game: game
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

export const addGame = (gameDetails) => {
  return dispatch => {
    return fetch(`${API_URL}/games`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      },
      body: JSON.stringify({game: gameDetails})
    })
      .then(response => response.json())
      .then(game => {
        dispatch(createGameSuccess(game))
        dispatch(reset('addGame'))
      })
      .catch(err => {
        throw new SubmissionError(err);
      })
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
      .then(game => {
        dispatch(updateGameSuccess(game))
        dispatch(reset('editGame'));
        history.push("/admin/games")
      })
      .catch(err => {
        throw new SubmissionError(err);
      })
  }
}

export const deleteGame = (gameId) => {
  return dispatch => {
    return fetch(`${API_URL}/games/${gameId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': "Bearer: " + localStorage.getItem('team.schedule.token')
      }
    })
      .then(response => response.json())
      .then(game => dispatch(removeGameSuccess(game)))
      .catch(error => console.log(error))
  }
}