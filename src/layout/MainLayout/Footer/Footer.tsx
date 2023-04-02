import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Layout,
  Dropdown,
  MenuProps,
  theme,
  Space,
  Menu,
  Input,
  Button,
} from "antd";
import {
  CaretDownOutlined,
  YoutubeFilled,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

import "./Footer.scss";

const {Footer} = Layout;
const {useToken} = theme;

const footerStyle: React.CSSProperties = {
  color: "black",
  backgroundColor: "#F6F6F6",
  top: 0,
  width: "100%",
  marginBottom: 100,
};

const menuStyle = {
  boxShadow: "none",
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Phòng A
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Phòng B
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        Phòng C
      </a>
    ),
  },
];

const FooterCustom = () => {
  const {token} = useToken();
  const [current, setCurrent] = useState("home");

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menues: MenuProps["items"] = [
    {
      key: "home",
      label: (
        <a className="nav-link scrollto active" href="#hero">
          Trang chủ
        </a>
      ),
    },
    {
      key: "about",
      label: (
        <a className="nav-link scrollto" href="#about">
          Giới thiệu
        </a>
      ),
    },
    {
      key: "room",
      label: (
        <Dropdown
          menu={{items}}
          dropdownRender={menu => (
            <div style={contentStyle}>
              {React.cloneElement(menu as React.ReactElement, {
                style: menuStyle,
              })}
            </div>
          )}
        >
          <a onClick={e => e.preventDefault()} href="/#">
            <Space>
              Phòng ban
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
    },
    {
      key: "portfolio",
      label: (
        <a className="nav-link scrollto " href="#portfolio">
          Tuyển dụng
        </a>
      ),
    },
    {
      key: "news",
      label: (
        <a className="nav-link scrollto" href="#services">
          Tin tức
        </a>
      ),
    },
    {
      key: "contact",
      label: (
        <a className="nav-link scrollto" href="#contact">
          Liên hệ
        </a>
      ),
    },
  ];

  return (
    <Footer style={footerStyle} id="footer">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <Link to="" className="logo">
          <img
            src={require("assets/images/logo/logo1.png")}
            alt="Logo BCA"
            className="img-fluid"
          />
          <h5 style={{fontWeight: "semi-bold"}}>Cục Y tế - Bộ Công An</h5>
        </Link>

        <div id="navbar" className="navbar">
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[current]}
            items={menues}
            style={{
              backgroundColor: "transparent",
              borderBottom: "none",
              width: "100%",
              justifyContent: "center",
              marginTop: "50px",
            }}
            onClick={e => setCurrent(e.key)}
          />
        </div>
        <span id="info">
          Nếu bạn quan tâm đến các thông tin của Cục Y tế - Bộ Công An, hãy theo
          dõi các kênh sau để không bị bỏ lỡ!
        </span>
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{marginTop: 50}}
        >
          <Input
            placeholder="Email"
            type="email"
            style={{width: "20%", height: 40, marginRight: 10}}
          />
          <Button type="primary" style={{height: 40}}>
            Đăng ký
          </Button>
        </div>
        <div
          className="container d-flex align-items-center justify-content-center"
          style={{marginTop: 50}}
        >
          <Space>
            <a href="/#">
              <YoutubeFilled style={{fontSize: "24px"}} />
            </a>
            <a href="/#">
              <FacebookFilled style={{fontSize: "24px"}} />
            </a>
            <a href="/#">
              <LinkedinFilled style={{fontSize: "24px"}} />
            </a>
            <a href="/#">
              <InstagramFilled style={{fontSize: "24px"}} />
            </a>
          </Space>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCustom;
