import { AppThunk, RootState } from '../store';
import {
  formSetErrorMessage,
  formClearErrorMessage,
  formLoadingStart,
  formLoadingStop,
  formSubmitted,
} from '../actions/formActions';
import { updateUser } from '../actions/userActions';

// Thunk function to handle the API call
export const updateUserDetails =
  (userData: any, userId: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(formLoadingStart());
      dispatch(formClearErrorMessage());
      const fetchUrl = `${process.env.REACT_APP_API_URL ?? ''}/api/user/${userId}/update`;
      const response = await fetch(
        fetchUrl,
        {
          method: 'PUT',
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
      
      dispatch(updateUser(userData))
      dispatch(formLoadingStop());
      dispatch(formSubmitted(true))
    } catch (error: any) {
      dispatch(formLoadingStop());
      console.log('createUser() error: ' + error);
    }
  };
