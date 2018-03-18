import 'isomorphic-fetch';

/* action creators */

const API_URL = process.env.REACT_APP_API_URL;

export const GetChatRoomSuccess = (chatRoom) => {
  return{
    type: 'GET_CHAT_ROOM_SUCCESS',
    chatRoom
  }
}

// Async actions - connect to Rails API

export const GetChatRoom = (id) => {
  return dispatch => {
    return fetch(`${API_URL}${id}`)
      .then( response => response.json() )
      .then( chatRoom => dispatch(GetChatRoomSuccess(chatRoom)))
      .catch( error => console.log(error))
  }
}