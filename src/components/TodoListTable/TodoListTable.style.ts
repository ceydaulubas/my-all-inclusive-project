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