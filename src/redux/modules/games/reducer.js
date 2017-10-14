export default (state = [], action) => {
  switch(action.type){
    case 'GET_GAMES_SUCCESS':
      return action.games;

    case 'CREATE_GAME_SUCCESS':
      const game = Object.assign({}, action.game);
      return state.concat(game);

    case 'REMOVE_GAME_SUCCESS':
      const games = state.filter(state => state.id !== action.gameId)
      return games;

    default:
      return state;
  }
}