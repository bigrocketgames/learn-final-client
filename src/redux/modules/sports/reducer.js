export default (state = [], action) => {
  switch(action.type) {
    
    case 'GET_SPORTS_SUCCESS':
      return action.sports;

    default:
      return state;
  }
}