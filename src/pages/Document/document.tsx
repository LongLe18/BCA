import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Typography, Breadcrumb} from "antd";
import {Table, Tag} from "antd";
import {columns, DataType, data} from "./document.config";
import "./document.scss";
import {useNavigate} from "react-router-dom";
import {Col, Row} from "antd";
// import {setCurrentPage} from "redux/actions";

const {Title, Text} = Typography;
const Document = () => {
  const data1 = useSelector<any>(state => state.common.page);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(data1);
    // dispatch(setCurrentPage("test"));
  }, []);

  return (
    <div className="document-page page container">
      <Breadcrumb
        style={{fontSize: 16, marginBottom: 10}}
        items={[
          {
            title: <a href="/">Trang chủ</a>,
          },
          {
            title: <a href="/document">Văn bản hướng dẫn</a>,
          },
        ]}
      />
      <Row className="header">
        <Col>
          <Title className="title">Văn bản hướng dẫn</Title>
        </Col>
      </Row>
      <div className="table">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};
export default Document;
