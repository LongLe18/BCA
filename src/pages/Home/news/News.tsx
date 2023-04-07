import React from "react";
import {Row, Col, Button, Card, Divider} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";

import "./News.scss";
import {Link} from "react-router-dom";

const News = () => {
  return (
    <section className="news-info">
      <div className="container">
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} className="row-title">
          <div className="title">
            <img src={require("assets/images/logo/logo2.png")} alt="logo-bca" />
            <h3>Tin tức</h3>
          </div>
          <div className="readmore">
            <a href="/news">Đọc thêm </a>
            <Button
              type="text"
              shape="circle"
              icon={<ArrowRightOutlined />}
              danger
              size="large"
              style={{padding: 0}}
            />
          </div>
        </Row>
        <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} className="row-title">
          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="col-news">
            <Card
              className="big-news"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://i.ex-cdn.com/doanhnhanphaply.vn/files/content/2022/08/10/tl-1042.jpg"
                />
              }
            >
              <div className="ant-card-meta-detail">
                <div className="ant-card-meta-date">
                  26 tháng 8 | <span>Hoạt động</span>
                </div>
                <div className="ant-card-meta-title">
                  <Link to={"/news/detail/:id"}>
                    Cục Y tế Bộ Công an đón nhận Huân chương Lao động hạng Ba
                  </Link>
                </div>
                <div className="ant-card-meta-description">
                  Sáng 22/02/2022, tại Hà Nội, Bộ Công an tổ chức kỷ niệm 67 năm
                  Ngày Thầy thuốc Việt Nam (27/02/1955 - 27/02/2022); 45 năm
                  Ngày thành lập Cục Y tế (21/01/1977-21/01/2022) và đón nhận
                  Huân chương Lao động hạng Ba
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="col-news">
            <Card
              className="big-news"
              hoverable
              cover={
                <img
                  alt="example"
                  src="http://benhvienbaichay.vn/uploads/news/63f478da53aed/z3317440601728-f55548f6d3965429534901f6789cd914-1.jpg"
                />
              }
            >
              <div className="ant-card-meta-detail">
                <div className="ant-card-meta-date">
                  26 tháng 8 | <span>Hoạt động</span>
                </div>
                <div className="ant-card-meta-title">
                  <Link to={"/news/detail/:id"}>
                    Cục Y tế Bộ Công an đón nhận Huân chương Lao động hạng Ba
                  </Link>
                </div>
                <div className="ant-card-meta-description">
                  Sáng 22/02/2022, tại Hà Nội, Bộ Công an tổ chức kỷ niệm 67 năm
                  Ngày Thầy thuốc Việt Nam (27/02/1955 - 27/02/2022); 45 năm
                  Ngày thành lập Cục Y tế (21/01/1977-21/01/2022) và đón nhận
                  Huân chương Lao động hạng Ba
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Divider />
        <Row
          gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
          style={{marginBottom: 70}}
        >
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            className="col-news-little"
          >
            <Card
              className="big-news little-news"
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://i.ex-cdn.com/doanhnhanphaply.vn/files/content/2022/08/10/tl-1042.jpg"
                />
              }
            >
              <div className="ant-card-meta-detail">
                <div className="ant-card-meta-date">
                  26 tháng 8 | <span>Hoạt động</span>
                </div>
                <div className="ant-card-meta-title">
                  <Link to={"/news/detail/:id"}>
                    Cục Y tế Bộ Công an đón nhận Huân chương Lao động hạng Ba
                  </Link>
                </div>
                <div className="ant-card-meta-description">
                  Sáng 22/02/2022, tại Hà Nội, Bộ Công an tổ chức kỷ niệm 67 năm
                  Ngày Thầy thuốc Việt Nam (27/02/1955 - 27/02/2022); 45 năm
                  Ngày thành lập Cục Y tế (21/01/1977-21/01/2022) và đón nhận
                  Huân chương Lao động hạng Ba
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            className="col-news-little"
          >
            <Card
              className="big-news little-news"
              hoverable
              cover={
                <img
                  alt="example"
                  src="http://benhvienbaichay.vn/uploads/news/63f478da53aed/z3317440601728-f55548f6d3965429534901f6789cd914-1.jpg"
                />
              }
            >
              <div className="ant-card-meta-detail">
                <div className="ant-card-meta-date">
                  26 tháng 8 | <span>Hoạt động</span>
                </div>
                <div className="ant-card-meta-title">
                  <Link to={"/news/detail/:id"}>
                    Cục Y tế Bộ Công an đón nhận Huân chương Lao động hạng Ba
                  </Link>
                </div>
                <div className="ant-card-meta-description">
                  Sáng 22/02/2022, tại Hà Nội, Bộ Công an tổ chức kỷ niệm 67 năm
                  Ngày Thầy thuốc Việt Nam (27/02/1955 - 27/02/2022); 45 năm
                  Ngày thành lập Cục Y tế (21/01/1977-21/01/2022) và đón nhận
                  Huân chương Lao động hạng Ba
                </div>
              </div>
            </Card>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={8}
            xl={8}
            className="col-news-little"
          >
            <Card
              className="big-news little-news"
              hoverable
              cover={
                <img
                  alt="example"
                  src="http://benhvienbaichay.vn/uploads/news/63f478da53aed/z3317440601728-f55548f6d3965429534901f6789cd914-1.jpg"
                />
              }
            >
              <div className="ant-card-meta-detail">
                <div className="ant-card-meta-date">
                  26 tháng 8 | <span>Hoạt động</span>
                </div>
                <div className="ant-card-meta-title">
                  <Link to={"/news/detail/:id"}>
                    Cục Y tế Bộ Công an đón nhận Huân chương Lao động hạng Ba
                  </Link>
                </div>
                <div className="ant-card-meta-description">
                  Sáng 22/02/2022, tại Hà Nội, Bộ Công an tổ chức kỷ niệm 67 năm
                  Ngày Thầy thuốc Việt Nam (27/02/1955 - 27/02/2022); 45 năm
                  Ngày thành lập Cục Y tế (21/01/1977-21/01/2022) và đón nhận
                  Huân chương Lao động hạng Ba
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default News;
