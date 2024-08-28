import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import FormInput from '../components/Forms/FormInput';
import Button from '../components/Button';
import { createUser } from '../redux/slice/authSliceRegister';
import { RootState, AppDispatch } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';
import { handleInputChange } from '../utils/forms/formHelpers';
import { formClearErrorMessage } from '../redux/actions/formActions';

const Register: React.FC = () => {
  const [registerPageFormData, setRegisterPageFormData] = useState({
    email: '',
    password: '',
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, setRegisterPageFormData, registerPageFormData);

  const dispatch = useDispatch<AppDispatch>();
  const { loading, errorMessage } = useSelector(
    (state: RootState) => state.form
  );
  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createUser(registerPageFormData));
  };

  useEffect(() => {
    return () => {
      //Clear Error message if leaving page or refreshing
      dispatch(formClearErrorMessage());
    };
  }, [dispatch]);

  return (
    <Layout>
      <h1>Registeration Page</h1>
      <form onSubmit={submitForm}>
        <FormInput
          name='email'
          placeholder='email'
          value={registerPageFormData.email}
          onChange={handleFormChange}
        />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          value={registerPageFormData.password}
          onChange={handleFormChange}
        />
        <p></p>
        {loading ? <Spinner /> : <Button type='submit'>Register</Button>}
      </form>
      <p>{errorMessage}</p>
    </Layout>
  );
};

export default Register;

function dispatcher() {
  throw new Error('Function not implemented.');
}
