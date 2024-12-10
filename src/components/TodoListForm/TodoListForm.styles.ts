import styled from 'styled-components';

export const TodoListFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #dcdcdc;
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: 80px;
    width: 100%;
    max-width: 400px;

    @media (max-width: 600px) {
        padding: 15px;
        max-width: 90%; 
    }

    @media (max-width: 768px) {
        max-width: 80%;
    }
`;

export const TodoListFormHeader = styled.h1`
    font-size: 24px;
    margin-bottom: 10px;
    color: #333;

    @media (max-width: 600px) {
        font-size: 20px; 
    }
`;

export const TodoListFormSubHeader = styled.h3`
    font-size: 16px;
    margin-bottom: 30px;
    font-style: italic;
    color: #666;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const TodoListFormInput = styled.input`
    padding: 12px;
    font-size: 16px;
    border: 1px solid #EFF2F5;
    border-radius: 5px;
    width: 100%; 
    box-sizing: border-box;
`;


export const TodoListFormButton = styled.button`
    padding: 10px;
    background-color: #1E90FF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;  
    text-align: center;

    &:hover {
        background-color: #4682b4;
    }

    @media (max-width: 600px) {
        padding: 12px;  
    }
`;
