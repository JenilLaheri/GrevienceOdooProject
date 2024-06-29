import React from 'react';
import { Space, Table, Tag } from 'antd';
const severities = ['Minor', 'Moderate', 'Major', 'Critical'];
const departments = ['Employee', 'HR', 'Admin', 'Cleanliness', 'Security'];

// Color mapping based on severity
const severityColors = {
  'Minor': 'green',
  'Moderate': 'orange',
  'Major': 'red',
  'Critical': '#cf1322',
};
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Department',
    dataIndex: 'Department',
    key: 'Department',
    filters: departments.map((department) => ({
      text: department,
      value: department,
    })),
    onFilter: (value, record) => record.Department === value,
  },
  {
    title: 'Severity',
    key: 'severity',
    dataIndex: 'severity',
    filters: severities.map((severity) => ({
      text: severity,
      value: severity,
    })),
    onFilter: (value, record) => record.severity.includes(value),
    render: (_, { severity }) => (
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




        {severity.map((severity) => (
          <Tag color={severityColors[severity]} key={severity}>
            {severity}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
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
    title: 'John Brown',
    Department: "Employee",
    createdAt: "10/12/1221",
    severity: ['Minor'],
  },
  {
    key: '2',
    title: 'Jim Green',
    Department: "HR",
    createdAt: "10/12/1221",
    severity: ['Moderate'],
  },
  {
    key: '3',
    title: 'Joe Black',
    Department: "Admin",
    createdAt: "10/12/1221",
    severity: ['Major'],
  },
  {
    key: '4',
    title: 'Joe Black 2',
    Department: "Cleanliness",
    createdAt: "10/12/1221",
    severity: ['Critical'],
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  // console.log('params', pagination, filters, sorter, extra);
};

const TableData = () => {
  return (
    <>
      <h1>Gravance List</h1>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </>
  )
}

export default TableData;