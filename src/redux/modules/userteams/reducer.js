export default (state = [], action) => {
  switch(action.type) {
    case 'GET_USERTEAMS_SUCCESS':
      return action.userTeams;

    default:
      return state;
  }
}