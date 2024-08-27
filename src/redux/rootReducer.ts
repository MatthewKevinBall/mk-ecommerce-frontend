import { combineReducers } from 'redux';
import loginReducer from './reducers/loginReducer';
import authSliceRegister from './slice/authSliceRegister';
import formReducer from './reducers/formReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;