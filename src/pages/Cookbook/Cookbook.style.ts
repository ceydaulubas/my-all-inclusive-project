import styled from 'styled-components';
import cookbookBackground from '../../assets/images/cookbookBackground.jpg';

export const CookbookContainerImage = styled.div`
    background-image: url(${cookbookBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 -20px 0 -20px;
    height: 200px;
    margin-top: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CookBookContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    background-color: #f8f3f3;
    padding: 20px;
    margin: 0px 160px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;
