export default (state = [], action) => {
  switch(action.type) {
    case 'GET_USERTEAMS_SUCCESS':
      return [...action.userTeams];

    case 'UPDATE_USERTEAM_SUCCESS':
      const index = state.findIndex(userTeam => userTeam.id === action.userTeam.id);
      return [
        ...state.slice(0, index),
        action.userTeam,
        ...state.slice(index + 1)
      ]

    default:
      return state;
  }
}