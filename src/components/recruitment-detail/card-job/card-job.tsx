import React from "react";
import {Row, Col, Space, Divider} from "antd";
import "./card.job.scss";
const CardJob = props => {
  const {data} = props;
  const {job, major, address, deadline} = data;
  return (
    <div className="card-job">
      <Space direction="vertical" size="middle">
        <Divider />
        <div className="title">Senior Front End Developer</div>
        <Row>
          <Col>{job}</Col>
          <Divider type="vertical"></Divider>
          <Col>{major}</Col>
          <Divider type="vertical"></Divider>
          <Col>{address}</Col>
          <Divider type="vertical"></Divider>
        </Row>
        <div>Hạn nộp: {deadline}</div>
      </Space>
    </div>
  );
};
export default CardJob;
