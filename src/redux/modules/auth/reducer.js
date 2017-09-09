const initialState = {
  // Adjust this here to check for token and set current user to the user associated with the token if there is one.
  isAuthenticated: false,
  isAuthenticating: true,
  currentUser: {}
}

const auth = (state = initialState, action) => {
  switch(action.type) {
    
    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true,
      }

    case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user
      }

    default:
      return state;
  }
}

export default auth;