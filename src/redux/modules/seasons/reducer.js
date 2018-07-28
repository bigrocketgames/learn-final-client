export default (state = [], action) => {
  switch(action.type) {
    case 'GET_SEASONS_SUCCESS':
      return [...action.seasons]

    default:
      return state;
  }
}