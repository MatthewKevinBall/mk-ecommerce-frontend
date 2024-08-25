import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login'
import './styles/App.scss'

const App: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />       
        <Route path="/login" element={<Login />} />       

      </Routes>
  );
};

export default App;
