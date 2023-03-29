import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import HeaderCustom from "./Header/Header";
import { Layout, Space } from 'antd';


import "./index.scss";

const MainLayout = () => {
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 100]}>
      <Layout className="layout">
        <HeaderCustom />
        <Outlet />
        <Footer />
      </Layout>
    </Space>
  );
};

export default MainLayout;
