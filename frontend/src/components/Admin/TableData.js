import React from 'react';
import { Space, Table, Tag } from 'antd';
const severities = ['Cosmetic', 'Minor', 'Moderate', 'Major', 'Critical'];

// Color mapping based on severity
const severityColors = {
  // 'Cosmetic': 'green',
  // 'Minor': 'cyan',
  // 'Moderate': 'blue',
  // 'Major': 'purple',
  // 'Critical': 'red',


  'Cosmetic': '#00FF00',
  'Minor': '#FFFF00',
  'Moderate': '#FFA500',
  'Major': '#FF0000',
  'Critical': '#8B0000',
};
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {/* {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })} */}




{severities.map((severity) => (
        <Tag color={severityColors[severity]} key={severity}>
          {severity}
        </Tag>
      ))}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a> */}
        <a>Assign</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer','asd','asdsd','asdasd','sadasdsd'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];



const TableData = () => {
  return (
    <>
      <h1>Gravance List</h1>
      <Table columns={columns} dataSource={data} />
    </>
  )
}

export default TableData;