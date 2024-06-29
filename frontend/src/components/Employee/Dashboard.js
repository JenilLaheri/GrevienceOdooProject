import React from 'react';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import TableData from './TableData';
import { Link } from 'react-router-dom';
const { Header, Content, Footer, } = Layout;
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
                    <Link to={"/emp-addcomplain"}>

                <Button type="primary" size={"large"}>
                    Add Complain
                </Button>
                    </Link>
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
                    <Breadcrumb.Item>Employee's Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: colorBgContainer, minHeight: "90vh", padding: 24, borderRadius: borderRadiusLG, }}>

                    <TableData />

                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Footer
            </Footer>
        </Layout>
    );
};
export default Database;