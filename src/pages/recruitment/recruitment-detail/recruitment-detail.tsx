import React, {useEffect} from "react";
import {Col, Row, Space, Typography, Divider} from "antd";
import CardJob from "components/recruitment-detail/card-job/card-job";
import {job} from "./data";
import "./recruitment-detail.scss";
const {Title} = Typography;

const RecruitmentDetail = () => {
  useEffect(() => {}, []);
  return (
    <div className="recruitment-detail-page page container">
      <Row>
        <Col xs={24} sm={24} md={16} lg={16} xl={16}>
          <Space direction="vertical" size="middle">
            <Title className="title">Senior Front End Developers </Title>
            <div className="paragraph">
              <div className="title">Mô tả</div>
              <div className="content">
                Kỹ sư kiểm thử phần mềm sẽ làm việc cùng với các thành viên
                trong nhóm và khách hàng, báo cáo trực tiếp cho người quản lý dự
                án. Trách nhiệm chính là đảm bảo chất lượng dự án và các dịch vụ
                hoạt động tích hợp đầy đủ như mong đợi của khách hàng, tuân thủ
                quy trình phát triển phần mềm và đóng góp ý kiến để nâng cao
                chất lượng dự án.
              </div>
            </div>
            <div className="paragraph">
              <div className="title">Yêu cầu</div>
              <div className="content">
                B.S., M.S. hoặc bằng cấp tương đương về Công nghệ thông tin,
                Khoa học máy tính, Kỹ thuật máy tính hoặc chuyên ngành có liên
                quan. Có ít nhất 1 năm kinh nghiệm trở lên ở các vị trí tương
                đương. Có kinh nghiệm test chức năng & phi chức năng (test thủ
                công). Có kiến thức về vòng đời phát triển phần mềm. Hiểu biết
                về các lỗi và lỗi phần mềm phổ biến. Một người chủ động, làm
                việc theo nhóm, có khả năng làm việc trong môi trường năng động.
                Có kinh nghiệm về tự động hóa kiểm tra chức năng (GUI, bố cục,
                Kiểm tra hồi quy, Kiểm tra đầu cuối, kiểm tra API) là một điểm
                cộng.
              </div>
            </div>
            <div className="paragraph">
              <div className="title">Phúc lợi</div>
              <div className="content">
                {`Thưởng hiệu suất công việc 
                 Bảo hiểm cá nhân + gia đình\n
                 18 ngày nghỉ phép có lương\n`}
              </div>
            </div>
          </Space>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8}>
          <Space
            style={{width: "100%"}}
            direction="vertical"
            size="middle"
            align="center"
          >
            <Space direction="vertical" size="middle" align="start">
              <Title className="title">Việc làm khác</Title>
              <CardJob data={job}></CardJob>
              <CardJob data={job}></CardJob>
              <CardJob data={job}></CardJob>
              <CardJob data={job}></CardJob>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};
export default RecruitmentDetail;
