import React, { useEffect, useState } from 'react';

// Ant Design
import { DatePicker, Form, Input, InputNumber, Button, Modal } from 'antd';

// Styles
import { PillListFormContainer } from './PillListForm.styles';

// Redux
import { useDispatch } from 'react-redux';
import { addPillData, updatePillData } from '../../redux/pillListSlice';

import moment from 'moment';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface PillListFormProps {
    visible: boolean;
    onClose: () => void;
    editData?: any;
}

const PillListForm: React.FC<PillListFormProps> = ({ visible, onClose, editData }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        if (editData) {
            form.setFieldsValue({
                ...editData,
                startStopDate: [editData.startDate, editData.stopDate].map(
                    (date) => date && moment(date)
                ),
                expirationDate: editData.expirationDate && moment(editData.expirationDate),
            });
        } else {
            form.resetFields();
        }
    }, [editData, form]);

    const handleSubmit = (values: any) => {
        const [startDate, stopDate] = values.startStopDate.map((date: any) =>
            date.format('YYYY-MM-DD')
        );

        const newEntry = {
            key: editData ? editData.key : Date.now(),
            medication: values.medication,
            startDate,
            stopDate,
            purpose: values.purpose,
            dosage: values.dosage,
            timeOfDay: values.timeOfDay,
            frequency: values.frequency,
            expirationDate: values.expirationDate.format('YYYY-MM-DD'),
        };

        if (editData) {
            dispatch(updatePillData(newEntry));
        } else {
            dispatch(addPillData(newEntry));
        }

        onClose();
    };

    return (
        <Modal
            open={visible} 
            title={editData ? 'Edit Medication' : 'Add Medication'}
            onCancel={onClose}
            footer={null}
        >
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item
                    label="Medication"
                    name="medication"
                    rules={[{ required: true, message: 'Please enter the medication name' }]}
                >
                    <Input placeholder="Enter medication name" />
                </Form.Item>
                <Form.Item 
                label="Start/ Stop Date" 
                name="startStopDate"
                rules={[{ required: true, message: 'Please select the expiration start/ stop dates' }]}
                >
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Purpose" name="purpose">
                    <TextArea rows={4} placeholder="Enter purpose of the medication" />
                </Form.Item>
                <Form.Item label="Dosage" name="dosage">
                    <Input placeholder="Enter dosage information" />
                </Form.Item>
                <Form.Item label="Time(s) of Day" name="timeOfDay">
                    <InputNumber min={0} max={24} placeholder="Enter time(s) of day" />
                </Form.Item>
                <Form.Item label="Frequency" name="frequency">
                    <Input placeholder="Enter frequency (e.g., daily, twice a day)" />
                </Form.Item>
                <Form.Item
                    label="Expiration Date"
                    name="expirationDate"
                    rules={[{ required: true, message: 'Please select the expiration date' }]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {editData ? 'Update' : 'Submit'}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default PillListForm;
