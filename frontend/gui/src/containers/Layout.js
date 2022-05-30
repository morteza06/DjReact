import React from 'react';
import { Breadcrumb, Layout, Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';


const { Header, Content, Footer } = Layout;

// works when >=4.20.0, recommended ✅
const items = [
    { label: 'item One', key: 'item-1', icon: <MailOutlined /> }, // remember to pass the key prop
    { label: 'item Two', key: 'item-2', icon: <AppstoreOutlined /> }, // which is required
    { label: (<a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                'item Three'
               </a>),
                key: 'item-3', icon: <SettingOutlined /> },
                
];

const CustomLayout = (props) => { 
    return(
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu mode='horizontal' items={items}  theme="dark" />
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
                >
                <Breadcrumb
                    style={{
                    margin: '16px 0',
                    }}
                    >
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                </Breadcrumb>

                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                Ant Design ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default CustomLayout;