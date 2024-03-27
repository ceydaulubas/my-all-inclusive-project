import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './layout/Navbar/Navbar';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

const App =() => {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>

    
  );
}

export default App;
