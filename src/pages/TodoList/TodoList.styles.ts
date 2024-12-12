import styled from 'styled-components';

export const TodoListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid #dcdcdc;
    background-color: #f9f9f9;
    padding: 20px;
    margin-top: 80px;


    @media (max-width: 600px) {
        padding: 15px;
        max-width: 90%; 
    }

    @media (max-width: 768px) {
        max-width: 80%;
    }
`;