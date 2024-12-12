import React ,{useState} from 'react';
import { Space, Table, Tag, Divider } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  task: string;
  deadline: string;
  description: string;
  tags: string[];
  priority: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Task',
    dataIndex: 'task',
    key: 'task',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Deadline',
    dataIndex: 'deadline',
    key: 'deadline',
  },
  {
    title: 'Priority',
    key: 'priority',
    dataIndex: 'priority',
    render: (_, { priority }) => (
      <>
        {priority.map((urgency) => {
          let color;
          switch (urgency) {
            case 'high':
              color = 'red';
              break;
            case 'medium':
              color = 'blue';
              break;
            case 'low':
              color = 'green';
              break;
            default:
              color = 'green';
          }
          return (
            <Tag color={color} key={urgency}>
              {urgency.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = 'darkgrey';

          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.task}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    task: 'Task 1',
    deadline: '11.12.2021',
    description: 'New York No. 1 Lake Park',
    priority: ['high'],
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    task: 'Task 2',
    deadline: '12.12.2021',
    description: 'London No. 1 Lake Park',
    priority: ['low'],
    tags: ['loser'],
  },
  {
    key: '3',
    task: 'Task 3',
    deadline: '28.12.2021',
    description: 'Sydney No. 1 Lake Park',
    priority: ['medium'],
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    task: 'Task 4',
    deadline: '11.12.2021',
    description: 'New York No.',
    priority: ['high'],
    tags: ['nice', 'developer'],
  },
  {
    key: '5',
    task: 'Task 5',
    deadline: '12.12.2021',
    description: 'London No. ffmm ',
    priority: ['low'],
    tags: ['loser'],
  },
  {
    key: '6',
    task: 'Task 6',
    deadline: '28.12.2021',
    description: 'Sydney No. rkmmk',
    priority: ['medium'],
    tags: ['cool', 'teacher'],
  }
];

const rowSelection: TableProps<DataType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record: DataType) => ({
    name: record.task,
  }),
};



const TodoListTable: React.FC = () => {

  const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');

  return(
  <div>
  <Divider />
  <Table<DataType> columns={columns} dataSource={data}  rowSelection={{ type: selectionType, ...rowSelection }} />;
    </div>
  )
}



export default TodoListTable;