import styled from 'styled-components';
import { devices } from '../../assets/statics/devices';

export const CalendarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 80px;

    & > * {
        width: calc(50% - 10px);
        margin-bottom: 20px;
    }

    @media (${devices.tablet}) {
        & > * {
            width: 100%;
        }
    }
`;
