export default (state = [], action) => {
  switch(action.type){
    case 'GET_GAMES_SUCCESS':
      return action.games;

    case 'CREATE_GAME_SUCCESS':
      const game = Object.assign({}, action.game);
      return state.concat(game);

    // case 'UPDATE_GAME_SUCCESS':{
    //   const index = state.findIndex(game => game.id === action.game.id);
    //   return [
    //     ...state.slice(0, index),
    //     action.game,
    //     ...state.slice(index + 1)
    //   ];
    // }

    case 'REMOVE_GAME_SUCCESS':
      const games = state.filter(game => game.id !== action.gameId)
      return games;

    default:
      return state;
  }
}