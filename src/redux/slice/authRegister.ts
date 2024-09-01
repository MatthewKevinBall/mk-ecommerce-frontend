import { AppThunk } from '../store';
import {
  formSetErrorMessage,
  formClearErrorMessage,
  formLoadingStart,
  formLoadingStop,
  formSubmitted,
} from '../actions/formActions';

// Thunk function to handle the API call
export const createUser =
  (userData: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(formLoadingStart());
      dispatch(formClearErrorMessage());
      const response = await fetch(
        'http://localhost:5125/api/register/add/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );
      const responseMessage = await response.text();
      if (!response.ok) {
        dispatch(formSetErrorMessage(responseMessage));
        dispatch(formLoadingStop());
        throw new Error('Failed to Register user');
      }
      
      dispatch(formSubmitted(true));
    } catch (error: any) {
      dispatch(formLoadingStop());
      console.log('createUser() error: ' + error);
    }
  };
