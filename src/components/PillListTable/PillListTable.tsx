import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { RootState } from '../../redux/store';
import { deletePillData } from '../../redux/pillListSlice';

// Components
import PillListForm from '../PillListForm/PillListForm';

// Ant Design
import { Table, Button, Modal } from 'antd';
import { DeleteOutlined, EditOutlined, PlusOutlined, MailOutlined, DownloadOutlined } from '@ant-design/icons';
import { ColumnType } from 'antd/es/table';

// PDF
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

        // Show the modal before deleting the data
        Modal.confirm({
            title: 'Are you sure you want to delete this data?',
            onOk: () => {
                dispatch(deletePillData(key));
            },
        });
 
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

    const columns: ColumnType<any>[] = [
        { title: 'Medication', dataIndex: 'medication', key: 'medication', responsive: ['xs','sm', 'md'] },
        { title: 'Start Date', dataIndex: 'startDate', key: 'startDate', responsive: ['xs','sm', 'md']},
        { title: 'Stop Date', dataIndex: 'stopDate', key: 'stopDate', responsive: ['xs','sm', 'md']},
        { title: 'Purpose', dataIndex: 'purpose', key: 'purpose', responsive: ['xs','sm', 'md']},
        { title: 'Dosage', dataIndex: 'dosage', key: 'dosage', responsive: ['xs','sm', 'md']},
        { title: 'Time(s) of Day', dataIndex: 'timeOfDay', key: 'timeOfDay', responsive: ['xs','sm', 'md']},
        { title: 'Frequency', dataIndex: 'frequency', key: 'frequency', responsive: ['xs','sm', 'md']},
        { title: 'Expiration Date', dataIndex: 'expirationDate', key: 'expirationDate', responsive: ['xs','sm', 'md']},
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: any) => (
                <div>
                    <EditOutlined onClick={() => handleEdit(record)} style={{ marginRight: 16 }} />
                    <DeleteOutlined onClick={() => handleDelete(record.key)} />
                </div>
            ),
            responsive: ['xs','sm', 'md'],
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
            <Table dataSource={tableData} columns={columns} pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '20', '30']}} scroll={{ x: 'max-content' }} />

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
