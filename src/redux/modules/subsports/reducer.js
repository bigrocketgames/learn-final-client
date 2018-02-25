export default (state = [], action) => {
  switch(action.type) {
    
    case 'GET_SUB_SPORTS_SUCCESS':
      return action.subSports;

    case 'ADD_SUB_SPORT_SUCCESS':
      const subSport = Object.assign({}, action.subSport);
      return state.concat(subSport);

    case 'REMOVE_SUB_SPORT_SUCCESS':
      const subSports = state.filter(subSport => subSport.id !== action.subSportId);
      return subSports;

    default:
      return state;
  }
}