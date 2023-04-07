import React, {useEffect} from "react";
import {Typography} from "antd";
import {Table, Tag, Breadcrumb} from "antd";
import {columns, DataType} from "./recruitment-main.config";
import "./recruitment-main.scss";
import {useNavigate} from "react-router-dom";
import {Col, Row} from "antd";

// redux
import {useSelector, useDispatch} from "react-redux";

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
  useEffect(() => {
    // dispatch(commonActions.setCurrentPage());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="recruitment-page page container">
      <Breadcrumb
        style={{fontSize: 16, marginBottom: 10}}
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <a href="/recruitment">Tuyển dụng</a>,
          },
        ]}
      />
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
