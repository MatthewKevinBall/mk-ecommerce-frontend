import React, { useState } from 'react';
import FormInput, { FormInputProps } from './FormInput';
import { handleInputChange } from '../../utils/forms/formHelpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { IUser } from '../../redux/interfaces/IUser';
import Button from '../Button';

const EditProfile = () => {
  const userData: IUser = useSelector((state: RootState) => state.user);

  const [loginFormData, setLoginFormData] = useState({
    firstName: userData.firstName ?? '',
    lastName: userData.lastName ?? '',
    email: userData.email ?? '',
    phoneNumber: userData.phoneNumber ?? '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, setLoginFormData, loginFormData);

  const handleEditProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginFormData);
  };

  return (
    <div className='container'>
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
    </div>
  );
};

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

export default EditProfile;
