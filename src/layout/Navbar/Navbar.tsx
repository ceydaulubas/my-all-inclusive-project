import React from "react";
import { useState } from "react";
import "./Navbar.scss";
import {
  UserOutlined,
  GlobalOutlined,
  LogoutOutlined,
  RightOutlined
} from "@ant-design/icons";

function Navbar() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(false);

  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
    isLanguagePopupOpen && setIsLanguagePopupOpen(false);
  };

  const toggleLanguagePopup = () => {
    setIsLanguagePopupOpen(!isLanguagePopupOpen);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img
          src="https://via.placeholder.com/150"
          alt="logo"
          className="navbar-logo"
        />
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <div className="navbar-badge-circle">
            {/* <img
                src="https://via.placeholder.com/25"
                alt="avatar"
                className="navbar-avatar"
              /> */}
            <p className="navbar-initial" onClick={toggleProfilePopup}>
              CU
            </p>

            {isProfilePopupOpen && (
              <div className="navbar-profile-popup-container">
                <div className="popup-header">
                  <div className="popup-cicrle">
                    <p className="popup-initial">CU</p>
                  </div>
                </div>
                <div className="popup-options">
                  <h3>Ceyda Uubas</h3>
                  <a href="/" className="navbar-popup-option">
                    {" "}
                    <UserOutlined className="navbar-popup-icon" />
                    Edit my Profile
                  </a>
                  <a href="/" className="navbar-popup-option">
                    {" "}
                    <LogoutOutlined className="navbar-popup-icon" />
                    Logout
                  </a>
                  <div className="navbar-language-part-container">
                    <p onClick={toggleLanguagePopup} className="navbar-popup-option" >
                      {" "}
                      <GlobalOutlined className="navbar-popup-icon" />
                      English{" "}
                    </p>
                    <RightOutlined  className="navbar-popup-arrow-icon" />
                  </div>
                </div>
              </div>
            )}

            {isLanguagePopupOpen && (
              <div className="language-popup-container">
                <div className="language-options">
                  <p onClick={() => setIsLanguageEnglish(true)}>English</p>
                  <p onClick={() => setIsLanguageEnglish(false)}>Turkish</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
