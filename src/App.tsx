import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login'
import './styles/App.scss'
import Register from './pages/Register';

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = () => {
    setLoggedIn(false); 
  };
  return (
      <Routes>
        <Route path="/" element={<Landing />} />       
        <Route path="/login" element={<Login />} />       
        <Route path="/register" element={<Register />} />
      </Routes>
  );
};

export default App;
