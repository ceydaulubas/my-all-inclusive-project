import styled from 'styled-components';
import { devices } from '../../assets/statics/devices';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #5b6560;
    height: 60px;
    width: 100%;
    margin-bottom: 20px;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
`;

export const HeaderLeft = styled.div`
    margin-left: 80px;

    .header-logo {
        width: 50px;
        height: 50px;
    }

    @media (${devices.tabletS}) {
        margin-left: 20px;
    }
`;

export const HeaderRight = styled.div``;

export const HeaderLinks = styled.div`
    display: flex;
    align-items: center;
    margin-right: 80px;

    a {
        margin-left: 20px;
        color: white;
        text-decoration: none;
    }

    @media (${devices.tabletS}) {
        margin-right: 20px;
    }
`;

export const HeaderBadgeCircle = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    margin-left: 20px;
    cursor: pointer;

    .header-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .header-initial {
        color: #a1a7bc;
        font-size: 20px;
        font-weight: bold;
        margin: 8px 3px;
    }
`;

export const HeaderProfilePopupContainer = styled.div`
    width: 250px;
    height: 350px;
    background-color: rgb(207, 233, 229);
    position: absolute;
    top: 60px;
    right: 0px;

    .popup-header {
        background-color: rgb(115, 129, 129);
        height: 25%;
    }

    .popup-options {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 75%;
        margin-top: 20px;

        .header-language-part-container {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 100%;
            margin-right: 28px;
        }

        .header-language-part-container:hover {
            color: #033929;
        }

        .header-popup-option:hover {
            color: #033929;
        }

        .header-popup-icon {
            margin-right: 20px;
        }

        .header-popup-arrow-icon {
            margin-left: auto;
        }

        a,
        p {
            text-align: left;
            width: 100%;
            margin-left: 30px;
        }

        h3 {
            cursor: pointer !important;
        }
    }

    .popup-cicrle {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: white;
        margin-top: 20px;
        position: absolute;
        top: calc(6%);
        left: 85px;
        border: 2px solid rgb(38, 86, 86);
    }

    .popup-initial {
        color: rgb(38, 86, 86);
        font-size: 30px;
        font-weight: bold;
        margin: 25px 10px;
    }
`;

export const LanguagePopupContainer = styled.div`
    position: absolute;
    display: flex;
    width: 90px;
    height: 100px;
    background-color: rgb(225, 235, 234);
    top: 310px;
    right: 250px;

    .language-options {
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 20px;
            color: #033929;
        }
        div:hover {
            color: #9b9494;
        }
    }
    @media (${devices.tabletS}) {
        top: 410px;
        right: 160px;
        border: 1px solid black;
    }
`;
