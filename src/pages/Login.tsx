import React, { useState } from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login logic here
       alert('Logging in with' + email + ' ' + password);
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
                <Button onClick={handleLogin}>Login</Button>
            </form>
        </Layout>
    );
};

export default Login;