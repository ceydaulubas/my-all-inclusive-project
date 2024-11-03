import styled from 'styled-components';
import cookbookBackground from '../../assets/images/cookbookBackground.jpg';
import { Card } from 'antd';

export const CookbookContainerImage = styled.div`
    background-image: url(${cookbookBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 200px;
    margin-top: 60px;
`;

export const CookBookContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    padding: 20px;
`;

export const CookbookCard = styled(Card)`
    width: 300px;
    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 75%;
    overflow: hidden;
`;

// Image styles
export const CardImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }
`;
