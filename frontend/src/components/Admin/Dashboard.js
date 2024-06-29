// import React, { useState } from 'react';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import TableData from './TableData';
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Option 2', '2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];
// const Dashboard = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: '100vh',
//       }}
//     >

//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <div style={{color:"white"}}>
//             <h1 style={{color:"white"}}>Odoo</h1>
//             <p>Gravance Management</p>
//         </div>
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
//       </Sider>
//       <Layout>
//         <Content style={{margin: '0 16px'}}>
//             {/* // file path */}
//           <Breadcrumb style={{margin: '16px 0'}}>
//             <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
//             {/* <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
//           </Breadcrumb>
//           <div style={{padding: 24,minHeight:"83vh",background: colorBgContainer,borderRadius: borderRadiusLG,}}>
//             <TableData/>
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: 'center',
//           }}
//         >
//           Footer content
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default Dashboard;








import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import TableData from './TableData';
const { Header, Content, Footer } = Layout;
const items = new Array(1).fill(null).map((_, index) => ({
    key: index + 1,
    label: `Odoo Gravance Management`,
}));
const Database = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{background: colorBgContainer,minHeight: "90vh",padding: 24,borderRadius: borderRadiusLG,}}>
                    
                    <TableData/>

                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default Database;