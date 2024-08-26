import React, { useState } from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../redux/actions';
import { RootState, AppDispatch } from '../redux/store';


const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loggedIn = useSelector((state: RootState) => state.login.loggedIn);
    const dispatch = useDispatch<AppDispatch>();

    const handleLogin = () => {
        // Handle login logic here
        console.log("TEst");
       alert('Logging in with' + email + ' ' + password);
       dispatch(login());
    };
    return (
        <Layout>
            <h1>Login Page</h1>
            <p>This is the login page</p>

        
            <form onSubmit={handleLogin}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit">Login</Button>
            </form>
        </Layout>
    );
};

export default Login;