import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import formReducer from './reducers/formReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  form: formReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
