import { IUser, defaultUser } from '../interfaces/IUser';

const initialState = {
  ...defaultUser,
};

type UserActions =
  | { type: 'UPDATE_USER'; payload: IUser }
  | { type: 'CLEAR_USER' }
  | { type: 'UPDATE_PASSWORD'; payload: IUser };

const userReducer = (state = initialState, action: UserActions): IUser => {
  switch (action.type) {
    case 'CLEAR_USER':
      return defaultUser;
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
