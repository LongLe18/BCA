import React from "react";
import {Space, Col, Row} from "antd";
import "./news-detail.scss";
import {data} from "../news-main/data";
const NewsDetail = () => {
  return (
    <div className="news-detail-page page container">
      <Space
        direction="vertical"
        size="middle"
        align="center"
        style={{width: "100%"}}
      >
        <div>
          <div className="title">{data[0].title}</div>
          <Space>
            <div className="date">{data[0].date}</div>
            <div className="catalog">{data[0].catalog}</div>
          </Space>
          <div className="img">
            <img src={data[0].img} alt="" />
          </div>
        </div>
      </Space>
    </div>
  );
};
export default NewsDetail;
