// import React from 'react';
// import { Badge, Descriptions } from 'antd';
// const items = [
//   {
//     key: '1',
//     label: 'Title',
//     span: 3,
//     children: 'Problem1',
//   },
//   {
//     key: '2',
//     label: 'Case Progress',
//     span: 2,
//     children: <Badge status="processing" text="Running" />,
//   },
//   {
//     key: '3',
//     label: 'Description',
//     span: 3,
//     children: (
//       <>
//         Description lorem20 Description lorem20 Description lorem20 Description lorem20 Description lorem20 Description lorem20 Description lorem20Description lorem20
//         Description lorem20
//         Description lorem20
//         Description lorem20

//         Description lorem20
//       </>
//     ),
//   },
//   {
//     key: '4',
//     label: 'Assigned To',
//     children: 'Raju HR',
//   },
//   {
//     key: '5',
//     label: 'Department',
//     children: 'HR',
//   },
//   {
//     key: '6',
//     label: 'severity',
//     span: 3,
//     children: <Badge status="processing" text="Major" />,
//   },
 
//   {
//     key: '7',
//     label: 'Assigned At',
//     children: '2018-04-24 18:00:00',
//   },
//   {
//     key: '8',
//     label: 'Created At',
//     children: '2019-04-24 18:00:00',
//   },
//   {
//     key: '9',
//     label: 'Attachments',
//     span: 2,
//     children: (
//       <>
//         Description lorem20 
//       </>
//     ),
//   },
 
// ];
// const TableData = () => <Descriptions title="User Info" layout="vertical" bordered items={items} />;
// export default TableData;
























import React from 'react';
import { Badge, Descriptions ,Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const TableData = () => {
  const items = [
    {
      key: '1',
      label: 'Title',
      span: 2,
      children: 'Problem1',
    },
    {
      key: '2',
      label: 'Case Progress',
      span: 3,
      children: <Badge status="processing" text="Running" />,
    },
    {
      key: '3',
      label: 'Description',
      span: 3,
      children: (
        <>
          Description lorem20 Description lorem20 Description lorem20 Description lorem20 Description lorem20 Description lorem20 Description lorem20Description lorem20
          Description lorem20
          Description lorem20
          Description lorem20
          Description lorem20
        </>
      ),
    },
    {
      key: '4',
      label: 'Assigned To',
      span: 1,
      children: 'Raju HR',
    },
    {
      key: '5',
      label: 'Department',
      span: 1,
      children: 'HR',
    },
    {
      key: '6',
      label: 'Severity',
      span: 1,
      children: <Badge status="processing" text="Major" />,
    },
    {
      key: '7',
      label: 'Assigned At',
      span: 1,
      children: '2018-04-24 18:00:00',
    },
    {
      key: '8',
      label: 'Created At',
      span: 1,
      children: '2019-04-24 18:00:00',
    },
    {
      key: '9',
      label: 'Attachments',
      span: 3,
      children: (
        <>
            <Button type="primary" icon={<DownloadOutlined />} size={'large'}>
            Download
          </Button>
        </>
      ),
    },
  ];

  return (
    <Descriptions title="User Info" layout="vertical" bordered>
      {items.map(item => (
        <Descriptions.Item key={item.key} label={item.label} span={item.span}>
          {item.children}
        </Descriptions.Item>
      ))}
    </Descriptions>
  );
};

export default TableData;
