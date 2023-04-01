import React from "react";
import {
  Space,
  Row,
  Col,
  Typography,
  Divider,
  Button,
  Checkbox,
  Form,
  Input,
} from "./modul";
import "./contact.scss";
const {Title, Text} = Typography;
const {TextArea} = Input;
const Contact = () => {
  return (
    <div className="contact-page page container">
      <Space style={{width: "100%"}} direction="vertical" size="large">
        <Title className="title">Liên hệ với chúng tôi</Title>
        <Row gutter={60}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Space direction="vertical" size="middle" style={{width: "100%"}}>
              <Text style={{fontSize: 16}} strong={true}>
                Để lại lời nhắn
              </Text>
              <Divider></Divider>
              <Form name="basic" layout="vertical">
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Họ và tên"
                      name="username"
                      rules={[{required: true, message: "Chưa nhập họ và tên"}]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Số điện thoại"
                      name="password"
                      rules={[{required: true, message: "Chưa nhập mật khẩu"}]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item
                      label="Để lại lời nhắn cho chúng tôi"
                      name="username"
                      rules={[{required: true, message: "Chưa nhập họ và tên"}]}
                    >
                      <TextArea rows={4} placeholder="Nhập" maxLength={2000} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Space>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Space direction="vertical" size="large">
              <Text style={{fontSize: 16}} strong={true}>
                Thông tin liên hệ
              </Text>
              <Divider></Divider>
              <Row>
                <Col span={12}>
                  <Space direction="vertical">
                    <div className="title">Điện thoại</div>
                    <div className="content">069.232.0011</div>
                  </Space>
                </Col>
                <Col span={12}>
                  <Space direction="vertical">
                    <div className="title">Fax</div>
                    <div className="content">02439428478</div>
                  </Space>
                </Col>
                <Col></Col>
              </Row>
              <Space direction="vertical">
                <div className="title">Trụ sở</div>
                <div className="content">
                  47, Phạm Văn Đồng, Cầu Giấy, Hà Nội
                </div>
              </Space>
              <div>
                <img src={require("assets/images/map.png")} alt="" />
              </div>
            </Space>
          </Col>
        </Row>
      </Space>
    </div>
  );
};
export default Contact;
