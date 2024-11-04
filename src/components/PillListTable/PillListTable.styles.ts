import styled from 'styled-components';
import { devices } from '../../assets/statics/devices';
import { Table } from 'antd';

export const PillListContainer = styled.div`
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

export const StyledTable = styled(Table)`
    .ant-table-thead > tr > th {
        background-color: #f0f0f0;
    }
    .ant-table-tbody > tr > td {
        background-color: #ffffff;
    }
    .ant-table-tbody > tr:hover > td {
        background-color: #e6f7ff;
    }
`;
