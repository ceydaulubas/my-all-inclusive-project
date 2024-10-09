import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import { devices } from '../../assets/statics/devices';

export const NavbarContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    left: 0;
    top: 60px;
    height: calc(100vh - 60px);
    width: ${(props) => (props.isOpen ? '200px' : '50px')};
    background-color: rgb(177, 190, 199);
    padding: 10px;
    transition: width 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: hidden;
    padding-top: 25px;

    @media (${devices.tablet}) {
        width: ${(props) => (props.isOpen ? '100%' : '50px')};
    }
`;

export const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

export const NavItemLink = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 50px;
    color: rgb(77, 77, 77);
    text-decoration: none;
    transition: color 0.3s ease;

    span {
        margin-left: 10px;
    }

    &:hover {
        color: #06223d;
    }
`;

export const ToggleIcon = styled.div`
    cursor: pointer;
`;

export const BoldLeftOutlined = styled(DoubleLeftOutlined)`
    font-size: 24px;
    filter: drop-shadow(0 0 2px black);
    padding-left: 10px;
`;

export const BoldRightIconOutlined = styled(DoubleRightOutlined)`
    font-size: 24px;
    filter: drop-shadow(0 0 2px black);
    padding-left: 10px;
`;

export const NavbarContent = styled.div`
    height: calc(100vh - 60px);
    background-color: inherit;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow-y: hidden;
`;
