import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { IFormState, defaultFormState } from '../interfaces/IFormState';
import {
  formSetErrorMessage,
  formClearErrorMessage,
  formSuccessMessage,
  formLoadingStart,
  formLoadingStop,
} from '../actions/formActions';
import { login } from '../actions/loginActions';

// Thunk function to handle the API call
export const createUser =
  (userData: any): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(formLoadingStart());
      dispatch(formClearErrorMessage());

      const response = await fetch(
        'http://localhost:5125/api/register/add/admin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        }
      );
      const responseMessage = await response.text();
      console.log(responseMessage);
      if (!response.ok) {
        dispatch(formSetErrorMessage(responseMessage));
        dispatch(formLoadingStop());
        throw new Error('Failed to Register user');
      }
      dispatch(formSuccessMessage('Created!'));
    } catch (error: any) {
      dispatch(formLoadingStop());
      console.log('createUser() error: ' + error);
    }
  };
