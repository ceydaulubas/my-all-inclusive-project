import React, { useState } from 'react';
import { Table, Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined, MailOutlined, DownloadOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { deletePillData } from '../../redux/pillListSlice';
import PillListForm from '../PillListForm/PillListForm';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const PillListTable: React.FC = () => {
    const tableData = useSelector((state: RootState) => state.pillList);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editData, setEditData] = useState<any>(null);

    // Formu açmak için
    const handleEdit = (record: any) => {
        setEditData(record);
        setIsModalVisible(true);
    };

    // Open the form when the "Add Medication" button is clicked
    const handleAdd = () => {
        setEditData(null); // Reset editData to add new data
        setIsModalVisible(true);
    };

    // Formu kapatmak için
    const handleModalClose = () => {
        setIsModalVisible(false);
        setEditData(null);
    };

    const handleDelete = (key: React.Key) => {
        dispatch(deletePillData(key));
    };

    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text('Pill List', 10, 10);
        // Add the data table to the PDF
        (doc as any).autoTable({
            head: [['Medication', 'Start Date', 'Stop Date', 'Purpose', 'Dosage', 'Time(s) of Day', 'Frequency', 'Expiration Date']],
            body: tableData.map(item => [
                item.medication,
                item.startDate,
                item.stopDate,
                item.purpose,
                item.dosage,
                item.timeOfDay,
                item.frequency,
                item.expirationDate,
            ]),
        });
        doc.save('PillList.pdf'); // Save the PDF with the name "PillList.pdf"
    };

    const handleSendMail = () => {
        console.log('Send mail button clicked');
    };

    const columns = [
        { title: 'Medication', dataIndex: 'medication', key: 'medication' },
        { title: 'Start Date', dataIndex: 'startDate', key: 'startDate' },
        { title: 'Stop Date', dataIndex: 'stopDate', key: 'stopDate' },
        { title: 'Purpose', dataIndex: 'purpose', key: 'purpose' },
        { title: 'Dosage', dataIndex: 'dosage', key: 'dosage' },
        { title: 'Time(s) of Day', dataIndex: 'timeOfDay', key: 'timeOfDay' },
        { title: 'Frequency', dataIndex: 'frequency', key: 'frequency' },
        { title: 'Expiration Date', dataIndex: 'expirationDate', key: 'expirationDate' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <div>
                    <EditOutlined onClick={() => handleEdit(record)} style={{ marginRight: 16 }} />
                    <DeleteOutlined onClick={() => handleDelete(record.key)} />
                </div>
            ),
        },
    ];

    return (
        <div>
            <div style={{ marginBottom: 16, marginTop: 80  }}>
                {/* Add new data */}
                <Button icon={<PlusOutlined />} onClick={handleAdd} style={{ marginRight: 16 }}>
                    Add Medication
                </Button>
                <Button icon={<MailOutlined />} onClick={handleSendMail} style={{ marginRight: 16 }}>
                    Send Mail
                </Button>
                <Button icon={<DownloadOutlined />} onClick={handleDownload}>
                    Download the List
                </Button>
            </div>

            {/* Table always seems */}
            <Table dataSource={tableData} columns={columns} pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}}/>

            {/* Form inside of the modal*/}
            <Modal
                title={editData ? 'Edit Medication' : 'Add Medication'}
                open={isModalVisible} 
                onCancel={handleModalClose}
                footer={null}
                destroyOnClose={true} // Reset the form when the modal is closed
            >
                <PillListForm visible={true} onClose={handleModalClose} editData={editData} />
            </Modal>
        </div>
    );
};

export default PillListTable;
