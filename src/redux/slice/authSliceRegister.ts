import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store'; 
import { IFormState, defaultFormState } from '../interfaces/IFormState';

const initialState: IFormState = {
  ...defaultFormState,
};

const authSliceRegister = createSlice({
  name: 'register',
  initialState,
  reducers: {
    createUserStart(state) {
      state.loading = true;
      state.errorMessage = null;
    },
    createUserSuccess(state) {
      state.loading = false;
      state.errorMessage = null;
    },
    createUserFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.errorMessage = action.payload;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
      state.loading = false;
    },
    clearLoading(state) {
      state.loading = false;
    },
  
  },
});

export const { createUserStart, createUserSuccess, clearLoading, clearErrorMessage, createUserFailure } = authSliceRegister.actions;

// Thunk function to handle the API call
export const createUser = (userData: any): AppThunk => async (dispatch) => {
  try {
    dispatch(createUserStart());
    const response = await fetch('http://localhost:5125/api/register/add/admin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const responseMessage = await response.text();
    console.log(responseMessage);
    if (!response.ok) {
      dispatch(createUserFailure(responseMessage));
      throw new Error('Failed to Register user');
    }
    dispatch(createUserSuccess());
  } catch (error: any) {
    dispatch(clearLoading());
    console.log("createUser() error: " + error);
  }
};

export default authSliceRegister.reducer;