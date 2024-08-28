import { AppThunk } from '../store';
import {
  formSetErrorMessage,
  formClearErrorMessage,
  formSuccessMessage,
  formLoadingStart,
  formLoadingStop,
} from '../actions/formActions';
import { login } from '../actions/loginActions';
import { updateUser } from '../actions/userActions';
import { IUser } from '../interfaces/IUser';
import { mapLoginResponseToUserData } from '../../utils/forms/authHelpers';

// Thunk function to handle the API call
export const loginUser =
  (userData: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(formLoadingStart());
      dispatch(formClearErrorMessage());

      const response = await fetch('http://localhost:5125/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.result);
      }
      const userObject = mapLoginResponseToUserData(json.result);

      dispatch(updateUser(userObject));
      dispatch(formLoadingStop());
      dispatch(login());
    } catch (error: any) {
      console.log('loginuser(): error: ' + error);
      dispatch(formSetErrorMessage(error.message));
    }
  };
