import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import {
    UserOutlined,
    GlobalOutlined,
    LogoutOutlined,
    RightOutlined,
} from '@ant-design/icons';
import logo from '../../assets/images/logo.png';
import {
    HeaderContainer,
    HeaderLeft,
    HeaderRight,
    HeaderLinks,
    HeaderBadgeCircle,
    HeaderProfilePopupContainer,
    LanguagePopupContainer,
} from './Header.styles';

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

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
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
                    <Link to="/">Home</Link>
                    <Link to="/login">Login</Link>
                    <HeaderBadgeCircle>
                        <p
                            className="header-initial"
                            onClick={toggleProfilePopup}
                        >
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
                                    <Link
                                        to="/"
                                        className="header-popup-option"
                                    >
                                        <UserOutlined className="header-popup-icon" />
                                        Edit my Profile
                                    </Link>
                                    <Link
                                        to="/"
                                        className="header-popup-option"
                                    >
                                        <LogoutOutlined className="header-popup-icon" />
                                        Logout
                                    </Link>
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
                                    <div onClick={() => selectLanguage(true)}>
                                        English
                                    </div>
                                    <div onClick={() => selectLanguage(false)}>
                                        Turkish
                                    </div>
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
