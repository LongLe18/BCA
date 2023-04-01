import React from "react";
import {Space, Row, Col, Typography, Divider, Tag} from "antd";
import CardNews from "components/news/card-news/card-news";
import "./news-main.scss";
import Slider from "components/common/ui-component/slider/Slider";
import {data, dataTab} from "./data";
const {Title} = Typography;
const NewsMain = () => {
  return (
    <div className="news-main-page">
      <Slider></Slider>
      <div className="newest">
        <div className="container">
          <Space direction="vertical" size={60}>
            <Row gutter={16}>
              <Col>
                <img
                  className="logo"
                  src={require("assets/images/logo/logo1.png")}
                  alt=""
                />
              </Col>
              <Col>
                <Title style={{fontSize: 22, fontWeight: "bold"}}>
                  Thông tin mới nhất của Cục Y tế
                </Title>
              </Col>
            </Row>
            <Row gutter={120}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <CardNews type={1} data={data[0]}></CardNews>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <CardNews type={1} data={data[0]}></CardNews>
              </Col>
            </Row>
            <Row gutter={80}>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <CardNews type={1} data={data[0]}></CardNews>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <CardNews type={1} data={data[0]}></CardNews>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <CardNews type={1} data={data[0]}></CardNews>
              </Col>
            </Row>
          </Space>
        </div>
      </div>
      <div className="read-more">
        <div className="container">
          <Space direction="vertical" size="large" style={{width: "100%"}}>
            <Row gutter={16}>
              <Col>
                <img
                  className="logo"
                  src={require("assets/images/logo/logo1.png")}
                  alt=""
                />
              </Col>
              <Col>
                <Title style={{fontSize: 22, fontWeight: "bold"}}>
                  Đọc thêm
                </Title>
              </Col>
            </Row>
            <Row gutter={80}>
              <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <Space direction="vertical" size="middle">
                  <CardNews type={2} data={data[0]}></CardNews>
                  <Divider></Divider>
                  <CardNews type={2} data={data[0]}></CardNews>
                  <Divider></Divider>
                  <CardNews type={2} data={data[0]}></CardNews>
                  <Divider></Divider>
                  <CardNews type={2} data={data[0]}></CardNews>
                  <Divider></Divider>
                  <CardNews type={2} data={data[0]}></CardNews>
                  <Divider></Divider>
                </Space>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Space direction="vertical" size="large">
                  <Space direction="vertical" size="middle">
                    <div className="title" style={{fontSize: 20}}>
                      Chủ đề dành cho bạn
                    </div>
                    <div className="tag-container">
                      <Row gutter={[16, 16]}>
                        {dataTab.map(e => (
                          <Col>
                            <Tag style={{height: "30px"}} color="default">
                              {e}
                            </Tag>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  </Space>
                  <Space direction="vertical" size="middle">
                    <div className="title" style={{fontSize: 20}}>
                      Bài viết nổi bật
                    </div>
                    <CardNews type={2} data={data[0]}></CardNews>
                    <Divider></Divider>
                    <CardNews type={2} data={data[0]}></CardNews>
                    <Divider></Divider>
                    <CardNews type={2} data={data[0]}></CardNews>
                    <Divider></Divider>
                  </Space>
                </Space>
              </Col>
            </Row>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default NewsMain;
