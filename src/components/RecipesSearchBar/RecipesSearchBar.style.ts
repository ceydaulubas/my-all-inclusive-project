import styled from 'styled-components';
import { Input, Form } from 'antd';
import { devices } from '../../assets';

export const StyledForm = styled(Form)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-top: 60px;
`;

export const StyledInput = styled(Input)`
    width: 70%;
    background-color: rgb(217, 217, 217);
    border-radius: 8px;
    border-color: darkgrey;
    &:hover {
        border-color: red;
    }
    &:focus {
        box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
        border-color: darkyellow;
    }

    @media (${devices.tabletS}) {
        width: 70%;
        font-size: 12px;
    }
    @media (${devices.mobileM}) {
        width: 70%;
        font-size: 12px;
    }
    @media (${devices.mobileS}) {
        width: 70%;
        font-size: 10px;
    }
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: darkgrey;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: darkyellow;
    }
    &:focus {
        box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
        border-color: darkyellow;
        background-color: grey;
    }

    @media (${devices.tabletS}) {
        padding: 10px;
        font-size: 12px;
    }

    @media (${devices.mobileM}) {
        padding: 10px;
        font-size: 12px;
    }

    @media (${devices.mobileS}) {
        width: 10%;
        font-size: 10px;
        padding: 8px 20px;
        margin-left: 4px;
    }
`;
