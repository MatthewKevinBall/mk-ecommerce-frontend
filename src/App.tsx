import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import './styles/App.scss';
import Register from './pages/Register';
import MyAccount from './pages/MyAccount';
import ResetPassword from './components/Forms/ResetPassword';
import Admin from './pages/Admin';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(false);
  };
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path="/admin" element={<Admin />} />
      <Route path='/login' element={<Login />} />
      <Route path='/my-account' element={<MyAccount />} />
      <Route path='/my-account/reset-password' element={<ResetPassword />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  );
};

export default App;
