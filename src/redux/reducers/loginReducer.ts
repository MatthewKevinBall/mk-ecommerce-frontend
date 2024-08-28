interface LoginState {
  loggedIn: boolean;
}

const initialState: LoginState = {
  loggedIn: false,
};

type LoginActions = { type: 'LOGIN' } | { type: 'LOGOUT' };

const loginReducer = (
  state = initialState,
  action: LoginActions
): LoginState => {
  switch (action.type) {
    case 'LOGOUT':
      return { ...state, loggedIn: false };
    case 'LOGIN':
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};

export default loginReducer;
