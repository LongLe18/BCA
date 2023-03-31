import React from "react";
import {Outlet} from "react-router-dom";
import FooterCustom from "./Footer/Footer";
import HeaderCustom from "./Header/Header";
import {Layout, Space} from "antd";
import "./index.scss";

const {Content} = Layout;
const contentStyle: React.CSSProperties = {
  backgroundColor: "#ffffff",
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
