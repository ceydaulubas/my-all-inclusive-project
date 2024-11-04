import React from 'react';
import { PillListTable, PillListForm } from '../../components/index';
import { MailOutlined, FileAddOutlined, DownloadOutlined } from '@ant-design/icons';

const PillList: React.FC = () => {
    return (
        <>
            <PillListForm />
            <div>
                <FileAddOutlined />
                <MailOutlined />
                <DownloadOutlined />
            </div>
            <PillListTable />
            
            
        </>
    );
};

export default PillList;
