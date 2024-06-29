import React from 'react'
import { Button, Form, Input, Select, Upload, Row, Col, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Option } = Select;
const { Title } = Typography;

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Addcomplain = () => {
    return (
        <>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '0px', backgroundColor: '#f0f2f5' }}>
                <Form
                    name="basic"
                    style={{
                        width: '100%',
                        maxWidth: '900px',
                        padding: '40px',
                        border: '1px solid #e8e8e8',
                        borderRadius: '12px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        backgroundColor: '#ffffff'
                    }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>Submit a Complaint</Title>
                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                label="Employee Id"
                                name="employeeId"
                                style={{ marginBottom: '16px' }}
                                rules={[{ required: true, message: 'Please input your Employee Id!' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Title"
                                name="title"
                                style={{ marginBottom: '16px' }}
                                rules={[{ required: true, message: 'Please input your Title!' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Input style={{ width: '100%' }} />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Description"
                        name="description"
                        style={{ marginBottom: '16px' }}
                        rules={[{ required: true, message: 'Please input your Description!' }]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Input.TextArea style={{ width: '100%' }} rows={4} />
                    </Form.Item>

                    <Row gutter={24}>
                        <Col span={12}>
                            <Form.Item
                                label="Department"
                                name="department"
                                style={{ marginBottom: '16px' }}
                                rules={[{ required: true, message: 'Please select a Department!' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Select placeholder="Select department" style={{ width: '100%' }}>
                                    <Option value="Marketing">Marketing</Option>
                                    <Option value="IT">IT</Option>
                                    <Option value="Finance">Finance</Option>
                                    <Option value="HR">HR</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Severity"
                                name="severity"
                                style={{ marginBottom: '16px' }}
                                rules={[{ required: true, message: 'Please select a Severity!' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol={{ span: 24 }}
                            >
                                <Select placeholder="Select severity" style={{ width: '100%' }}>
                                    <Option value="Minor">Minor</Option>
                                    <Option value="Moderate">Moderate</Option>
                                    <Option value="Major">Major</Option>
                                    <Option value="Critical">Critical</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Attachments"
                        name="attachments"
                        style={{ marginBottom: '16px' }}
                        valuePropName="fileList"
                        getValueFromEvent={(e) => e.fileList}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                    >
                        <Upload name="logo" action="/upload.do" listType="text" style={{ width: '100%' }}>
                            <Button icon={<UploadOutlined />} style={{ width: '100%' }}>Click to upload</Button>
                        </Upload>
                    </Form.Item>

                    <Form.Item style={{ textAlign: 'center', marginBottom: 0 }}>
                        <Button type="primary" htmlType="submit" style={{ width: '150px', height: '40px', fontSize: '16px',margin:"10px" }}>
                            Submit
                        </Button>
                        <Link to={'/emp-dashboard'}>

                            <Button type="primary" htmlType="submit" style={{ width: '150px', height: '40px', fontSize: '16px', margin:"10px" }}>
                                Cancel
                            </Button>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
            );

        </>
    )
}

export default Addcomplain
