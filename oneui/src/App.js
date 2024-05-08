import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
  return (
    <Router>
      <div className='bg-white-800 flex h-screen w-full items-center justify-center'>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
