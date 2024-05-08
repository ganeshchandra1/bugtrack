import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
// Import other components

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
      {/* Define other Routes */}
    </Routes>
  );
};

export default AppRoutes;
