export default (state = [], action) => {
  switch(action.type) {

    case 'GET_SCHEDULE_SUCCESS':
      return action.schedule;

    default:
      return state;
  } 
}