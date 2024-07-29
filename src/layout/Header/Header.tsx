import React, { useState, useEffect, useRef } from "react";
import {
  UserOutlined,
  GlobalOutlined,
  LogoutOutlined,
  RightOutlined,
} from "@ant-design/icons";

import logo from "../../assets/images/logo.png";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderLinks,
  HeaderBadgeCircle,
  HeaderProfilePopupContainer,
  LanguagePopupContainer,
} from "./Header.styles";

function Header() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isLanguagePopupOpen, setIsLanguagePopupOpen] = useState(false);
  const [isLanguageEnglish, setIsLanguageEnglish] = useState(false);

  const profilePopupRef = useRef<HTMLDivElement>(null);
  const languagePopupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profilePopupRef.current &&
        !profilePopupRef.current.contains(event.target as Node)
      ) {
        setIsProfilePopupOpen(false);
      }

      if (
        languagePopupRef.current &&
        !languagePopupRef.current.contains(event.target as Node)
      ) {
        setIsLanguagePopupOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
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

  const selectLanguage = (isEnglish: boolean) => {
    setIsLanguageEnglish(isEnglish);
    setIsLanguagePopupOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <img src={logo} alt="logo" className="header-logo" />
      </HeaderLeft>
      <HeaderRight>
        <HeaderLinks>
          <a href="/">Home</a>
          <a href="/login">Login</a>
          <HeaderBadgeCircle>
            <p className="header-initial" onClick={toggleProfilePopup}>
              CU
            </p>

            {isProfilePopupOpen && (
              <HeaderProfilePopupContainer ref={profilePopupRef}>
                <div className="popup-header">
                  <div className="popup-cicrle">
                    <p className="popup-initial">CU</p>
                  </div>
                </div>
                <div className="popup-options">
                  <h3>Ceyda Uubas</h3>
                  <a href="/" className="header-popup-option">
                    <UserOutlined className="header-popup-icon" />
                    Edit my Profile
                  </a>
                  <a href="/" className="header-popup-option">
                    <LogoutOutlined className="header-popup-icon" />
                    Logout
                  </a>
                  <div className="header-language-part-container">
                    <p onClick={toggleLanguagePopup}>
                      <GlobalOutlined className="header-popup-icon" />
                      English
                    </p>
                    <RightOutlined className="header-popup-arrow-icon" />
                  </div>
                </div>
              </HeaderProfilePopupContainer>
            )}

            {isLanguagePopupOpen && (
              <LanguagePopupContainer ref={languagePopupRef}>
                <div className="language-options">
                  <div onClick={() => selectLanguage(true)}>English</div>
                  <div onClick={() => selectLanguage(false)}>Turkish</div>
                </div>
              </LanguagePopupContainer>
            )}
          </HeaderBadgeCircle>
        </HeaderLinks>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
