import React from 'react';
import { Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import type { TableColumnsType } from 'antd';

interface DataType {
    key: React.Key;
    name: string;
    startDate: string;
    stopDate: string;
    purpose: string;
    dosage: string | number;
    timesOfDay: number;
    frequency: string | number;
    expirationDate: string;
    notes: string;
}

const handleDelete = () => {
    console.log('delete');
};

const handleEdit = () => {
    console.log('edit');
};

const columns: TableColumnsType<DataType> = [
    { title: 'Medication', dataIndex: 'name', key: '1' },
    { title: 'Start Date', dataIndex: 'startDate', key: '2' },
    { title: 'Stop Date', dataIndex: 'stopDate', key: '3' },
    { title: 'Purpose', dataIndex: 'purpose', key: '4' },
    { title: 'Dosage', dataIndex: 'dosage', key: '5' },
    { title: 'Time(s) of Day', dataIndex: 'timesOfDay', key: '6' },
    { title: 'Frequency', dataIndex: 'frequency', key: '7' },
    { title: 'Expiration Date', dataIndex: 'expirationDate', key: '8' },
    { title: 'Notes', dataIndex: 'notes', key: '9' },
    {
        title: 'Edit',
        fixed: 'right',
        width: 90,
        render: () => (
            <div onClick={handleEdit}>
                <EditOutlined />
            </div>
        ),
    },
    {
        title: 'Delete',
        width: 90,
        render: () => (
            <div onClick={handleDelete}>
                <DeleteOutlined />
            </div>
        ),
    },
];

const dataSource: DataType[] = [
    {
        key: '1',
        name: 'Olivia',
        startDate: '32',
        stopDate: 'New York Park',
        purpose: '1',
        dosage: 'Olivia',
        timesOfDay: 32,
        frequency: 'New York Park',
        expirationDate: '32',
        notes: 'New York Park',
    },
    {
        key: '2',
        name: 'Ethan',
        startDate: '40',
        stopDate: 'London Park',
        purpose: '1',
        dosage: 'Olivia',
        timesOfDay: 32,
        frequency: 'New York Park',
        expirationDate: '32',
        notes: 'New York Park',
    },
];

const PillListTable: React.FC = () => {
    return (
        <div style={{ marginTop: 80 }}>
            <Table<DataType>
                bordered
                columns={columns}
                dataSource={dataSource}
                scroll={{ x: 'max-content' }}
                pagination={false}
            />
        </div>
    );
};

export default PillListTable;
