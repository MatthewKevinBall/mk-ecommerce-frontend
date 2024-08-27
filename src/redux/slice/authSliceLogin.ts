import { AppThunk } from '../store'; 
import { formSetErrorMessage, formSuccessMessage, formLoadingStart, formLoadingStop, login } from '../actions'

// Thunk function to handle the API call
export const loginUser = (userData: any): AppThunk => async (dispatch) => {
  try {
    dispatch(formLoadingStart());

    const response = await fetch('http://localhost:5125/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const text = await response.text();
    if (!response.ok) {
      throw new Error('Failed to Login user');
    }
    dispatch(formSuccessMessage(text));
    dispatch(formLoadingStop());
    dispatch(login())

  } catch (error: any) {
    console.log("loginuser(): error: " + error);
    dispatch(formSetErrorMessage(error.message));
  }
};
