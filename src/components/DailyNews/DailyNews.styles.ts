import styled from 'styled-components';

export const DailyNewsContainer = styled.div`
    background-color: rgba(245, 216, 235, 0.244);
`;

export const DailyNewsHeader = styled.h5`
    margin-left: 20px;
`;

export const DailyNewsList = styled.li`
    color: black;
    margin: 20px;

    &:hover {
        color: #00008b;
        font-weight: 500;
        cursor: grab;
    }
`;