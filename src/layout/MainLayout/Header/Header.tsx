import "./Header.scss";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
  Layout,
  Dropdown,
  Space,
  theme,
  Menu,
  Avatar,
  Drawer,
  Button,
} from "antd";
import {
  CaretDownOutlined,
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type {MenuProps} from "antd";
import {RootState} from "redux/store";
import {changeCurrentPage} from "redux/reducers/common";

const {Header} = Layout;
const {useToken} = theme;

const headerStyle: React.CSSProperties = {
  color: "black",
  backgroundColor: "rgb(251, 255, 255)",
  // position: "fixed",
  height: "90px",
  top: 0,
  width: "100%",
  boxShadow:
    "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.08)",
};

const menuStyle = {
  boxShadow: "none",
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a rel="noopener noreferrer" href="/department">
        Phòng tổng hợp
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a rel="noopener noreferrer" href="https://www.aliyun.com">
        Phòng y tế dự phòng
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Phòng nghiệp vụ Y
      </a>
    ),
  },
  {
    key: "4",
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Phòng nghiệp vụ Dược
      </a>
    ),
  },
  {
    key: "5",
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Phòng y tế cơ quan bộ
      </a>
    ),
  },
  {
    key: "6",
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        Phòng quản lý môi trường
      </a>
    ),
  },
  {
    key: "7",
    label: (
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        PQL điều dưỡng & phục hồi chức năng
      </a>
    ),
  },
];

const itemsFlag: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <>
        <Avatar src={require("assets/images/logo/vietnam.png")} />
        Tiếng Việt
      </>
    ),
  },
  {
    key: "2",
    label: (
      <>
        <Avatar src={require("assets/images/logo/england.png")} />
        Tiếng Anh
      </>
    ),
  },
];

const HeaderCustom = () => {
  const {token} = useToken();
  const [current, setCurrent] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const currentPage = useSelector((state: RootState) => state.common);
  const dispatch = useDispatch();
  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menues: MenuProps["items"] = [
    {
      key: "home",
      label: (
        <a
          className={`nav-link scrollto link-to ${
            current == "home" ? "active" : ""
          }`}
          href="/"
        >
          Trang chủ
        </a>
      ),
    },
    {
      key: "introduce",
      label: (
        <a
          className={`nav-link scrollto link-to ${
            current == "introduce" ? "active" : ""
          }`}
          href="/introduce"
        >
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
          <a onClick={e => e.preventDefault()} href="/#" className="link-to">
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
        <a className="nav-link scrollto link-to " href="/recruitment">
          Tuyển dụng
        </a>
      ),
    },
    {
      key: "invite",
      label: (
        <a className="nav-link scrollto" href="/bidding">
          Mời thầu
        </a>
      ),
    },
    {
      key: "document",
      label: (
        <a className="nav-link scrollto" href="/document">
          Văn bản
        </a>
      ),
    },
    {
      key: "news",
      label: (
        <a className="nav-link scrollto" href="/news">
          Tin tức
        </a>
      ),
    },
    {
      key: "contact",
      label: (
        <a className="nav-link scrollto" href="/contact">
          Liên hệ
        </a>
      ),
    },
    {
      key: "search",
      label: (
        <a className="nav-link scrollto link-to" href="/#">
          <SearchOutlined />
        </a>
      ),
    },
    {
      key: "flag",
      label: (
        <Dropdown
          menu={{items: itemsFlag}}
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
              <Avatar src={require("assets/images/logo/vietnam.png")} />
              <CaretDownOutlined />
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];
  useEffect(() => {
    console.log(currentPage);
  }, []);
  return (
    <Header style={headerStyle} id="header">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="" className="logo">
          <img
            src={require("assets/images/logo/logo1.png")}
            alt="Logo BCA"
            className="img-fluid"
          />
          <h5>Cục Y tế - Bộ Công An</h5>
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
            }}
            onClick={e => {
              console.log(e.key);
              dispatch(changeCurrentPage(e.key));
            }}
            overflowedIndicator={<MenuOutlined />}
          />
        </div>
        <Button
          type="text"
          id="button-menu"
          shape="circle"
          icon={<MenuOutlined />}
          onClick={() => setOpenMenu(true)}
        ></Button>
        <Drawer
          title={
            <img
              src={require("assets/images/logo/logo1.png")}
              alt="Logo BCA"
              className="img-fluid"
              width={100}
            />
          }
          placement="right"
          onClose={() => setOpenMenu(false)}
          visible={openMenu}
        >
          <Menu
            mode="vertical"
            defaultSelectedKeys={[current]}
            items={menues}
            style={{
              backgroundColor: "transparent",
              borderBottom: "none",
              width: "100%",
            }}
            onClick={e => {}}
            overflowedIndicator={<MenuOutlined />}
          />
        </Drawer>
      </div>
    </Header>
  );
};

export default HeaderCustom;
