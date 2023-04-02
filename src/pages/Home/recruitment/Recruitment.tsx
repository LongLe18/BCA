import React from "react";
import {Row, Button, Table} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {columns, DataType} from "./Recruitment-home.config";

import "./Recruitment.scss";

const HomeRecruitment = () => {
  const data: DataType[] = [
    {
      key: "1",
      job: "Senior Front End Developer (x8)",
      rank: "Nhân viên",
      address: "Hà Nội",
      major: "Pháp chế",
      deadline: "27 tháng 3, 2021",
    },
    {
      key: "2",
      job: "Công việc 1",
      rank: "Nhân viên",
      address: "Hà Nội",
      major: "Pháp chế",
      deadline: "27 tháng 3, 2021",
    },
    {
      key: "3",
      job: "Công việc 1",
      rank: "Nhân viên",
      address: "Hà Nội",
      major: "Pháp chế",
      deadline: "27 tháng 3, 2021",
    },
  ];

  return (
    <section className="recruitment-info">
      <div className="container">
        <Row
          gutter={{xs: 8, sm: 16, md: 24, lg: 32}}
          style={{marginBottom: 30, justifyContent: "space-between"}}
        >
          <div className="title">
            <img src={require("assets/images/logo/logo2.png")} alt="logo-bca" />
            <h3>Tuyển dụng</h3>
          </div>
          <div className="readmore">
            <a href="/recuitment">Đọc thêm </a>
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
        <div className="recruitment-page container">
          <div className="table">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeRecruitment;
