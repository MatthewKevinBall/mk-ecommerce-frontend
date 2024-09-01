import React, { useEffect, useState } from 'react';
import FormInput, { FormInputProps } from './FormInput';
import { handleInputChange } from '../../utils/forms/formHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { IUser } from '../../redux/interfaces/IUser';
import Button from '../Button';
import { env } from 'process';
import { AppDispatch } from '../../redux/store';
import { updateUserDetails } from '../../redux/slice/updateUserDetails';
import { formClearErrorMessage, formSubmitted } from '../../redux/actions/formActions';

const EditProfile = () => {
  const userData: IUser = useSelector((state: RootState) => state.user);
  const { loading, errorMessage, success } = useSelector(
    (state: RootState) => state.form
  );
  const [loginFormData, setLoginFormData] = useState({
    firstName: userData.firstName ?? '',
    lastName: userData.lastName ?? '',
    email: userData.email ?? '',
    phoneNumber: userData.phoneNumber ?? '',
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, setLoginFormData, loginFormData);

  const resetForm = () => {
    dispatch(formSubmitted(false));
    return null;
  }

  useEffect(() => {
    return () => {
      //Clear Error message if leaving page or refreshing
      dispatch(formClearErrorMessage());
      dispatch(formSubmitted(false));
    };
  }, [dispatch]);
  
  const handleEditProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(userData.id == null){
      console.log("no user Id stored");
    }

    dispatch(updateUserDetails(loginFormData, userData.id));
  };

  const successMessage = () => {
    return (
      <div>
        <a onClick={(resetForm)}>Back</a>
        <p>Profile successfully updated!</p>
      </div>
    )
  }
  const editProfileFormRow = (
    label: string,
    InputComponent: React.ComponentType<FormInputProps>,
    inputProps: FormInputProps
  ) => {
    return (
      <div className='row'>
        <div className='col-4'>
          <p>{label}</p>
        </div>
        <div className='col-8'>
          <InputComponent {...inputProps} />
        </div>
      </div>
    );
  };

  return (
    <div className='container'>
      <p className="mb-3">Update Your Account</p>
      {success ? successMessage() : 
        <form onSubmit={handleEditProfileSubmit}>
          {editProfileFormRow('First Name', FormInput, {
            name: 'firstName',
            placeholder: 'Enter your name',
            value: loginFormData.firstName,
            onChange: handleFormChange,
          })}
          {editProfileFormRow('Last name', FormInput, {
            name: 'lastName',
            placeholder: 'Enter your last name',
            value: loginFormData.lastName,
            onChange: handleFormChange,
          })}
          {editProfileFormRow('Email', FormInput, {
            type: 'email',
            name: 'email',
            placeholder: 'Enter your email',
            value: loginFormData.email,
            onChange: handleFormChange,
          })}
          {editProfileFormRow('Phone Number', FormInput, {
            name: 'phoneNumber',
            placeholder: 'Enter your phone number',
            value: loginFormData.phoneNumber,
            onChange: handleFormChange,
          })}
          <Button className='mt-3' type='submit'>
            Submit
          </Button>
        </form>
        }
    </div>
  );
  
};


export default EditProfile;
