import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions';
import { RootState, AppDispatch } from '../redux/store';
import { loginUser } from '../redux/slice/authSliceLogin';
import Spinner from '../components/Spinner';
import { formClearErrorMessage } from '../redux/actions';
import { useNavigate } from 'react-router-dom';



const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, errorMessage } = useSelector((state: RootState) => state.form);
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const userData = {
            email,
            password,
          };
        dispatch(loginUser(userData));
    };

    useEffect(() => {
        if (loggedIn) {
            // Navigate to the index page upon successful login
            navigate('/');
        }
    
        return () => {
            dispatch(formClearErrorMessage()); // Optional: Clears error message when component unmounts
        };
    }, [loggedIn, navigate, dispatch]);

    return (
        <Layout>
            <h1>Login Page</h1>
            <p>This is the login page</p>

        
            <form onSubmit={handleLogin}>
                <Input
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {loading && (
                    <Spinner />
                )}
                <p>{errorMessage}</p>
                <Button type="submit">Login</Button>
            </form>
            <a href='/register'>Register for an account here</a>
        </Layout>
    );
};

export default Login;