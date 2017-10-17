export default (state = [], action) => {
  switch(action.type) {
    
    case 'GET_SPORTS_SUCCESS':
      return action.sports;

    case 'ADD_SPORT_SUCCESS':
      const sport = Object.assign({}, action.sport);
      return state.concat(sport);

    case 'REMOVE_SPORT_SUCCESS':
      const sports = state.filter(sport => sport.id !== action.sportId)
      return sports;

    default:
      return state;
  }
}