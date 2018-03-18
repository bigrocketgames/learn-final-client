export default (state = {}, action) => {
  switch(action.type) {

    case 'GET_CHAT_ROOM_SUCCESS':
      return action.chatRoom;

    default:
      return state;
  }
}