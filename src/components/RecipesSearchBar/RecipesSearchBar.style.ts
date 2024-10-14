import styled from 'styled-components';
import { Input } from 'antd';

export const StyledInput = styled(Input)`
    width: 30%;
    background-color: rgb(217, 217, 217);
    border-radius: 8px;
    border-color: darkgrey;
    &:hover {
        border-color: darkorange;
    }
    &:focus {
        box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
        border-color: darkyellow;
    }

    @media (max-width: 768px) {
        width: 80%;
    }
    @media (max-width: 425px) {
        width: 90%;
    }
    @media (max-width: 375px) {
        width: 70%;
    }
    @media (max-width: 320px) {
        width: 100%;
    }
`;
