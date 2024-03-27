import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import {
  UserOutlined,
  GlobalOutlined,
  LogoutOutlined,
  RightOutlined,
} from "@ant-design/icons";

import logo from "../../assets/images/logo.png";

function Header() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(false);

  const profilePopupRef = useRef<HTMLDivElement>(null);
  const languagePopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close the popups if clicked area is not inside the popups
      if (
        profilePopupRef.current &&
        !profilePopupRef.current.contains(event.target as Node) &&
        languagePopupRef.current &&
        !languagePopupRef.current.contains(event.target as Node)
      ) {
        setIsProfilePopupOpen(false);
        setIsLanguagePopupOpen(false);
      }
    };
    // Add event listener for click outside the popups
    document.addEventListener("mousedown", handleClickOutside);
    // Remove the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleProfilePopup = () => {
    setIsProfilePopupOpen(!isProfilePopupOpen);
    isLanguagePopupOpen && setIsLanguagePopupOpen(false);
  };

  const toggleLanguagePopup = () => {
    setIsLanguagePopupOpen(!isLanguagePopupOpen);
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} alt="logo" className="header-logo" />
      </div>
      <div className="header-right">
        <div className="header-links">
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <div className="header-badge-circle">
            {/* <img
                src="https://via.placeholder.com/25"
                alt="avatar"
                className="header-avatar"
              /> */}
            <p className="header-initial" onClick={toggleProfilePopup}>
              CU
            </p>

            {isProfilePopupOpen && (
              <div
                ref={profilePopupRef}
                className="header-profile-popup-container"
              >
                <div className="popup-header">
                  <div className="popup-cicrle">
                    <p className="popup-initial">CU</p>
                  </div>
                </div>
                <div className="popup-options">
                  <h3>Ceyda Uubas</h3>
                  <a href="/" className="header-popup-option">
                    {" "}
                    <UserOutlined className="header-popup-icon" />
                    Edit my Profile
                  </a>
                  <a href="/" className="header-popup-option">
                    {" "}
                    <LogoutOutlined className="header-popup-icon" />
                    Logout
                  </a>
                  <div className="header-language-part-container">
                    <p onClick={toggleLanguagePopup}>
                      {" "}
                      <GlobalOutlined className="header-popup-icon" />
                      English{" "}
                    </p>
                    <RightOutlined className="header-popup-arrow-icon" />
                  </div>
                </div>
              </div>
            )}

            {isLanguagePopupOpen && (
              <div ref={languagePopupRef} className="language-popup-container">
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

export default Header;
