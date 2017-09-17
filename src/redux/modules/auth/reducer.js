const initialState = {
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
    
    case 'LOGOUT_USER':
      return {
        isAuthenticated: false,
        isAuthenticating: true,
        currentUser: {}
      }

    default:
      return state;
  }
}

export default auth;