import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

// Import Pages
import {Home, Login} from './pages/index'
import {Header,Navbar } from './layout/index'

// Import Redux Tools
import type { RootState } from './redux/store'
import { useSelector } from 'react-redux'

const App = () => {

  const isNavbarOpen = useSelector((state: RootState) => state.navbarPopup.isOpen);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className={`content-container ${isNavbarOpen ? 'navbar-open' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Navbar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
