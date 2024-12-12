import React from 'react';
import { Form, Checkbox } from 'antd';
import type { FormProps } from 'antd';

// Styles
import {
    TodoListFormContainer,
    TodoListFormHeader,
    TodoListFormSubHeader,
    TodoListFormButton,
    TodoListFormInput
} from './TodoListForm.styles';

type FieldType = {
    task?: string;
    description?: string;
    deadline?: string;
    priority?: string;
    tag?: string;
    notification?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);

};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const TodoListForm: React.FC = () => {

    return (
        <TodoListFormContainer>
            <TodoListFormHeader>Tasks</TodoListFormHeader>
            <TodoListFormSubHeader>
                To-Do lists help us break life into small steps
            </TodoListFormSubHeader>
            <Form
                name="basic"
                style={{ width: '80%' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    name="task"
                    rules={[{ required: true, message: 'Please input your task!' }]}
                >
                    <TodoListFormInput placeholder="Task" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="description"
                    rules={[{ required: true, message: 'Please input the description!' }]}
                >
                    <TodoListFormInput placeholder="Description" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="deadline"
                    rules={[{ required: true, message: 'Please input the deadline!' }]}
                >
                    <TodoListFormInput placeholder="Deadline" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="priority"
                    rules={[{ required: true, message: 'Please input the priority!' }]}
                >
                    <TodoListFormInput placeholder="Priority" />
                </Form.Item>

                <Form.Item<FieldType>
                    name="tag"
                    rules={[{ required: true, message: 'Please input the tag!' }]}
                >
                    <TodoListFormInput placeholder="Tag" />
                </Form.Item>

                <Form.Item<FieldType> name="notification" valuePropName="checked">
                    <Checkbox>Add Notification</Checkbox>
                </Form.Item>

                <Form.Item>
                    <TodoListFormButton>
                        Add
                    </TodoListFormButton>
                </Form.Item>
            </Form>
        </TodoListFormContainer>
    );
};

export default TodoListForm;
