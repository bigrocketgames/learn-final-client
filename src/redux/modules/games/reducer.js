export default (state = [], action) => {
  switch(action.type){
    case 'GET_GAMES_SUCCESS':
      return action.games;

    case 'CREATE_GAME_SUCCESS':
      state.push(action.game)
      return state;

    default:
      return state;
  }
}