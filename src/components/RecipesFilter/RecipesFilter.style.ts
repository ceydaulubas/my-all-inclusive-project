import styled from 'styled-components';
import { Button } from 'antd';
import { devices } from '../../assets/index';

export const RecipesFilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    margin-top: 20px;
`;

export const FilterButton = styled.button`
    background-color: rgb(91, 101, 95);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    @media (${devices.desktop}) {
        padding: 4px 16px;
    }

    @media (${devices.tablet}) {
        padding: 4px 16px;
        margin: 6px;
    }

    @media (${devices.tabletS}) {
        padding: 4px 9px;
        margin: 4px;
        font-size: 12px;
    }

    @media (${devices.mobileM}) {
        padding: 4px 8px;
        margin: 2px;
        font-size: 12px;
    }

    @media (${devices.mobileS}) {
        padding: 4px 8px;
        margin: 2px;
        font-size: 10px;
    }
`;

export const FilterButtonText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`;
