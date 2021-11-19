import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Routing from './Routes';

function App() {
  return (
    <BrowserRouter >
        <Routing />        
    </BrowserRouter>
  );
}

export default App;
