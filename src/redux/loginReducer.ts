interface LoginState {
    loggedIn: boolean;
  }
  
  const initialState: LoginState = {
    loggedIn: false,
  };
  
  type LoginActions = { type: 'LOGIN' } | { type: 'LOGOUT' };
  
  const loginReducer = (state = initialState, action: LoginActions): LoginState => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, loggedIn: true };
      case 'LOGOUT':
        return { ...state, loggedIn: false };
      default:
        return state;
    }
  };
  
  export default loginReducer;