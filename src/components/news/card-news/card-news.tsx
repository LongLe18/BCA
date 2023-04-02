import React from "react";
import {Space, Col, Row, Divider} from "antd";
import {Link} from "react-router-dom";
import "./card-news.scss";

const CardNews = props => {
  const {data, type} = props;
  const {img, date, catalog, title, content} = data;
  return (
    <div className="card-news">
      {type == 1 && (
        <div className="type-1">
          <Space direction="vertical" size="small">
            <div className="img">
              <img src={`${img}`} alt="" />
            </div>

            <Space size="middle">
              <div className="date">{date}</div>
              <div className="catalog">{catalog}</div>
            </Space>
            <div className="title">
              <Link to="/news/detail/:id">{title}</Link>
            </div>
            <div className="content">{content}</div>
          </Space>
        </div>
      )}
      {type == 2 && (
        <div className="type-2">
          <Row gutter={30}>
            <Col span={14}>
              <Space direction="vertical">
                <Space size="middle">
                  <div className="date">{date}</div>
                  <div className="catalog">{catalog}</div>
                </Space>
                <div className="title">{title}</div>
                <div className="content">{content}</div>
              </Space>
            </Col>
            <Col span={10}>
              <div className="img">
                <img src={`${img}`} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
export default CardNews;
