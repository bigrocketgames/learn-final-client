export default (state = [], action) => {
  switch(action.type) {
    case 'SET_FAVORITE_TEAM_SUCCESS':
      return action.userTeams;

    default:
      return state;
  }
}