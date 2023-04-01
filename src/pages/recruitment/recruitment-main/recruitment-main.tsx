import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Typography} from "antd";
import {Table, Tag} from "antd";
import {columns, DataType} from "./recruitment-main.config";
import "./recruitment-main.scss";
import {useNavigate} from "react-router-dom";
import {Col, Row} from "antd";
import {setCurrentPage} from "redux/actions";
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
  const data1 = useSelector<any>(state => state.common.page);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data1);
    // dispatch(setCurrentPage("test"));
  }, []);

  return (
    <div className="recruitment-page page container">
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
