import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './layout/Header/Header';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Navbar from './layout/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
