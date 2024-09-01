import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import FormInput from '../components/Forms/FormInput';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions/loginActions';
import { RootState, AppDispatch } from '../redux/store';
import { loginUser } from '../redux/slice/authLogin';
import Spinner from '../components/Spinner';
import { formClearErrorMessage } from '../redux/actions/formActions';
import { useNavigate } from 'react-router-dom';
import { handleInputChange } from '../utils/forms/formHelpers';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });
  const { loading, errorMessage } = useSelector(
    (state: RootState) => state.form
  );
  const loggedIn = useSelector((state: RootState) => state.login.loggedIn);

  //Import shared form handler
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleInputChange(e, setLoginFormData, loginFormData);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser(loginFormData));
  };

  useEffect(() => {
    if (loggedIn) {
      navigate('/');
    }
    return () => {
      //Clear Error message if leaving page or refreshing
      dispatch(formClearErrorMessage());
    };
  }, [loggedIn, navigate, dispatch]);

  return (
    <Layout>
      <h1>Login Page</h1>
      <p>This is the login page</p>

      <form onSubmit={handleLogin}>
        <FormInput
          name='email'
          type='text'
          placeholder='email'
          value={loginFormData.email}
          onChange={handleFormChange}
        />
        <FormInput
          name='password'
          type='password'
          placeholder='Password'
          value={loginFormData.password}
          onChange={handleFormChange}
        />
        {loading && <Spinner />}
        <p>{errorMessage}</p>
        <Button type='submit'>Login</Button>
      </form>
      <a href='/register'>Register for an account here</a>
    </Layout>
  );
};

export default Login;
