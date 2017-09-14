export default (state = [], action) => {
  switch(action.type) {
    
    case 'GET_SUB_SPORTS_SUCCESS':
      return action.subSports;

    default:
      return state;
  }
}