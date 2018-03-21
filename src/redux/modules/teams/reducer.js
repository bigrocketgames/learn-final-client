export default (state = [], action) => {
  switch(action.type) {
    case 'GET_TEAMS_SUCCESS':
      if (Array.isArray(action.teams)) {
        return action.teams;
      } else {
        return [action.teams];
      }
      return action.teams;

    case 'ADD_TEAM_SUCCESS':
      const team = Object.assign({}, action.team);
      return state.concat(team);

    case 'REMOVE_TEAM_SUCCESS':
      const teams = state.filter(team => team.id !== action.teamId);
      return teams;

    default:
      return state;
  }
}