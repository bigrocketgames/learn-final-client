const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  currentUser: {},
  error: ''
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
        currentUser: action.user,
        error: ''
      }

    case 'AUTHENTICATION_FAILED':
      return {
        ...state,
        error: "Invalid username/password combination."
      }
    
    case 'LOGOUT_USER':
      return {
        isAuthenticated: false,
        isAuthenticating: true,
        currentUser: {},
        error: ''
      }

    default:
      return state;
  }
}

export default auth;