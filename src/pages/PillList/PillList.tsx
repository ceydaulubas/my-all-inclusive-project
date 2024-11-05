import React, { useState } from 'react';
import { PillListTable, PillListForm } from '../../components/index';

const PillList: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const closeFormModal = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <PillListForm visible={isModalVisible} onClose={closeFormModal} />
            <PillListTable />
        </>
    );
};

export default PillList;
