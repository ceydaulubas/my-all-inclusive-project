import React, { useState } from 'react';
import { DatePicker, Form, Input, InputNumber, Button } from 'antd';
import { PillListFormContainer } from './PillListForm.styles';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const PillListForm: React.FC = () => {
    return (
        <PillListFormContainer>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 900 }}
            >
                <Form.Item label="Medication">
                    <Input />
                </Form.Item>
                <Form.Item label="Start/ Stop Date ">
                    <RangePicker />
                </Form.Item>
                <Form.Item label="Purpose">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Dosage">
                    <Input />
                </Form.Item>
                <Form.Item label="Time(s) of Day">
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Frequency">
                    <Input />
                </Form.Item>
                <Form.Item label="Expiration Date">
                    <DatePicker />
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </PillListFormContainer>
    );
};

export default () => <PillListForm />;
