import React from "react";
import {Outlet} from "react-router-dom";
import FooterCustom from "./Footer/Footer";
import HeaderCustom from "./Header/Header";
import {Layout, Space} from "antd";
const {Content} = Layout;
import "./index.scss";
const contentStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
  paddingTop: 72,
  paddingBottom: 72,
};

const MainLayout = () => {
  return (
    <Space direction="vertical" style={{width: "100%"}} size={[0, 100]}>
      <Layout className="layout">
        <HeaderCustom />
        <Content style={contentStyle}>
          <Outlet />
        </Content>
        <FooterCustom />
      </Layout>
    </Space>
  );
};

export default MainLayout;
