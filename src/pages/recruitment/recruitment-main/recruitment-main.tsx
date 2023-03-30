import React, {useEffect} from "react";
import {Typography} from "antd";
import {Table, Tag} from "antd";
import {columns, DataType} from "./recruitment-main.config";
import "./recruitment-main.scss";
import {useNavigate} from "react-router-dom";
import {Col, Row} from "antd";
const data: DataType[] = [
  {
    key: "1",
    job: "Công việc 1",
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
const {Title, Text} = Typography;
const RecruitmentMain = () => {
  useEffect(() => {}, []);
  const directToDetail = () => {
    const navigate = useNavigate();
  };
  return (
    <div className="recruitment-page container">
      <Row className="header">
        <Col>
          <Title className="title">
            Hãy phát triển và xây dựng tương lai cùng chúng tôi
          </Title>
        </Col>
      </Row>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default RecruitmentMain;
