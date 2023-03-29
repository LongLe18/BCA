import "./Header.scss";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Layout, Dropdown, Space, theme, Menu, Avatar, Drawer, Button } from 'antd';
import { CaretDownOutlined, SearchOutlined, MenuOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

const { Header } = Layout;
const { useToken } = theme;

const headerStyle: React.CSSProperties = {
    color: 'black',
    backgroundColor: 'rgb(251, 246, 246)',
    position: 'fixed', 
    height: '90px',
    top: 0, 
    width: '100%'
};

const menuStyle = {
    boxShadow: 'none',
};

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Phòng A
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Phòng B
        </a>
      ),
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Phòng C
        </a>
      ),
    },
];

const itemsFlag: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <>
            <Avatar src={require('assets/images/logo/vietnam.png')}/>
            Tiếng Việt
        </>
      ),
    },
    {
      key: '2',
      label: (
        <>
        <Avatar src={require('assets/images/logo/england.png')}/>
        Tiếng Anh
        </>
      ),
    },
];

const HeaderCustom = () => {
    const { token } = useToken();
    const [current, setCurrent] = useState('home');
    const [openMenu, setOpenMenu] = useState(false);

    const contentStyle = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,
    };

    const menues: MenuProps['items'] = [
        {
            key: 'home',
            label: (
                <a className="nav-link scrollto active" href="#hero">Trang chủ</a>
            )
        },
        {
            key: 'about',
            label: (
                <a className="nav-link scrollto" href="#about">Giới thiệu</a>
            ),
        },
        {
            key: 'room',
            label: (
                <Dropdown menu={{ items }}
                    dropdownRender={(menu) => (
                        <div style={contentStyle}>
                            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                        </div>
                    )}
                >
                    <a onClick={(e) => e.preventDefault()} href='/#'>
                    <Space>
                        Phòng ban
                        <CaretDownOutlined />
                    </Space>
                    </a>
                </Dropdown>
            )
        },
        {
            key: 'portfolio',
            label: (
                <a className="nav-link scrollto " href="#portfolio">Tuyển dụng</a>
            )
        },
        {
            key: 'invite',
            label: (
                <a className="nav-link scrollto" href="#team">Mời thầu</a>
            )
        },
        {
            key: 'document',
            label: (
                <a className="nav-link scrollto" href="#services">Văn bản</a>
            )
        },
        {
            key: 'news',
            label: (
                <a className="nav-link scrollto" href="#services">Tin tức</a>
            )
        },
        {
            key: 'contact',
            label: (
               <a className="nav-link scrollto" href="#contact">Liên hệ</a>
            )
        },
        {
            key: 'search',
            label: (
                <a className="nav-link scrollto" href="/#"><SearchOutlined /></a>
            )   
        },
        {
            key: 'flag',
            label: (
                <Dropdown menu={{ items: itemsFlag }}
                    dropdownRender={(menu) => (
                        <div style={contentStyle}>
                            {React.cloneElement(menu as React.ReactElement, { style: menuStyle })}
                        </div>
                    )}
                >
                    <a onClick={(e) => e.preventDefault()} href='/#'>
                    <Space>
                        <Avatar src={require('assets/images/logo/vietnam.png')}/>
                        <CaretDownOutlined />
                    </Space>
                    </a>
                </Dropdown>
            )
        }
    ];

    return (
        <Header style={headerStyle} id="header">
            <div className="container d-flex align-items-center justify-content-between">
                <Link to="" className="logo">
                    <img src={require('assets/images/logo/logo1.png')} alt="Logo BCA" className="img-fluid"/>
                    <h5>Cục Y tế - Bộ Công An</h5>
                </Link>

                
                <div id="navbar" className="navbar">
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={[current]}
                        items={menues} 
                        style={{
                            backgroundColor: 'transparent',
                            borderBottom: 'none',
                            width: '100%',
                        }}
                        onClick={(e) => setCurrent(e.key)}
                        overflowedIndicator={<MenuOutlined />}
                    />
                    
                </div>
                <Button type='text' id='button-menu' shape="circle" icon={<MenuOutlined />} onClick={() => setOpenMenu(true)}></Button>
                <Drawer title={<img src={require('assets/images/logo/logo1.png')} alt="Logo BCA" className="img-fluid" width={100}/>} 
                    placement="right" onClose={() => setOpenMenu(false)} visible={openMenu}>
                    <Menu
                        mode="vertical"
                        defaultSelectedKeys={[current]}
                        items={menues} 
                        style={{
                            backgroundColor: 'transparent',
                            borderBottom: 'none',
                            width: '100%',
                        }}
                        onClick={(e) => setCurrent(e.key)}
                        overflowedIndicator={<MenuOutlined />}
                    />
                </Drawer>
            </div>
        </Header>
    );
};

export default HeaderCustom;
