import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import Button from '../components/Button';
import { createUser, clearErrorMessage  } from '../redux/slice/authSliceRegister';
import { RootState, AppDispatch } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../components/Spinner';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { loading, errorMessage } = useSelector((state: RootState) => state.form);
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        const userData = {
            email,
            password,
          };
          dispatch(createUser(userData))
    }
    
    useEffect(() => {
        return () => {
            dispatch(clearErrorMessage());
        };
    }, [dispatch]);

    return (
        <Layout>
            <p>Registeration Page</p>
            <form onSubmit={submitForm}>
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
                <p></p>
                {loading ? (
                    <Spinner />
                ) : (
                    <Button type="submit">Register</Button>
                
                )}
            </form>
            <p>{errorMessage}</p>
        </Layout>
    )
}

export default Register;

function dispatcher() {
    throw new Error('Function not implemented.');
}
