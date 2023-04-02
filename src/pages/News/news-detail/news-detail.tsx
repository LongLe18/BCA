import React from "react";
import {Space, Col, Row, Typography, Divider} from "antd";
import "./news-detail.scss";
import {data} from "../news-main/data";
const {Title} = Typography;
const NewsDetail = () => {
  return (
    <div className="news-detail-page page container">
      <Space
        direction="vertical"
        size="middle"
        align="start"
        // style={{width: "100%"}}
      >
        <div className="title">
          <Title style={{fontSize: 26}}>{data[0].title}</Title>
        </div>
        <Row gutter={10}>
          <Col style={{width: "fit-content"}} className="date">
            {data[0].date}
          </Col>
          <Col className="catalog">{data[0].catalog}</Col>
        </Row>
        <div className="img">
          <img src={data[0].img} alt="" />
        </div>
        <div className="description">{data[0].content}</div>
        <div className="content">
          Cùng dự buổi Lễ, về phía Bộ Công an có các đồng chí: Thượng tướng Trần
          Quốc Tỏ, Ủy viên Trung ương Đảng, Thứ trưởng; Thượng tướng Nguyễn Văn
          Sơn, Thứ trưởng, Trưởng Ban Chỉ đạo của Bộ Công an về phòng, chống
          dịch bệnh; Thiếu tướng Lê Văn Tuyến, Thứ trưởng; đại diện lãnh đạo các
          đơn vị chức năng thuộc Bộ. Về phía khách mời có các đồng chí: Nguyễn
          Thanh Long, Ủy viên Trung ương Đảng, Bộ trưởng Bộ Y tế; Nguyễn Trường
          Sơn, Thứ trưởng Bộ Y tế; đại diện các cơ quan chức năng thuộc Bộ Y tế,
          Bộ Quốc phòng.{" "}
        </div>
        <div className="img">
          <img
            src={
              "https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenPhuongAnh/2022/2/bca_0154.jpg"
            }
            alt=""
          />
        </div>
        <div className="content">
          Diễn văn tại buổi Lễ nêu rõ: 67 năm thực hiện lời dạy của Bác Hồ kính
          yêu, cùng với Y tế nước nhà, lực lượng Y tế Công an nhân dân (CAND) đã
          lớn mạnh về mọi mặt, cả về mạng lưới các cơ sở y tế, cả về đội ngũ y
          bác sĩ, cán bộ y tế và chất lượng công tác khám chữa bệnh, chăm sóc
          sức khỏe cho cán bộ, chiến sĩ (CBCS) và nhân dân, đóng góp một phần
          trong công tác đảm bảo an ninh chính trị và giữ gìn trật tự, an toàn
          xã hội. Từ chỗ còn chưa có một tổ chức y tế độc lập, trang thiết bị về
          chuyên môn y tế gần như không có, đến nay mạng lưới y tế CAND đã được
          củng cố, hoàn thiện, tổ chức thành mạng lưới rộng khắp từ Trung ương
          đến địa phương với 03 tuyến chuyên môn, kỹ thuật gồm 212 đầu mối với
          7.350 giường bệnh, 6.590 cán bộ y tế, đảm bảo quan điểm chỉ đạo của
          Đảng ủy Công an Trung ương và lãnh đạo Bộ Công an: “Ở đâu có CBCS Công
          an, ở đó có cán bộ y tế Công an để thực hiện công tác bảo vệ, chăm
          sóc, nâng cao sức khỏe”. Lực lượng Y tế CAND hiện đã có 18 Bệnh viện,
          trong đó có 04 Bệnh viện hạng I được đầu tư trang bị tương đối hiện
          đại; tổ chức bộ máy ngày càng được củng cố, mở rộng và kiện toàn theo
          hướng chuyên sâu…
        </div>
        <div className="img">
          <img
            src="https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenPhuongAnh/2022/2/bca_0277.jpg"
            alt=""
          />
        </div>
        <div className="content">
          Đồng chí Bộ trưởng cũng yêu cầu tiếp tục rà soát, hoàn thiện hệ thống
          các quy định của pháp luật về công tác y tế, nhất là sửa đổi, bổ sung
          văn bản về tổ chức bộ máy, cơ chế hoạt động, chức năng, nhiệm vụ và
          định mức biên chế của Bệnh viện, Bệnh xá, y tế cơ sở trong CAND. Tham
          mưu kiện toàn tổ chức mạng lưới y tế ngành Công an. Tăng cường đào tạo
          cho cán bộ y tế, kết hợp tập huấn chuyên môn phù hợp theo tuyến chuyên
          môn kỹ thuật gắn với bồi dưỡng nâng cao y đức, nâng cao tinh thần
          trách nhiệm hết lòng vì người bệnh. Tập trung đẩy mạnh công tác chỉ
          đạo tuyến, chuyển giao kỹ thuật trong hệ thống y tế CAND. Bên cạnh đó,
          tăng cường hợp tác, liên kết giữa các Bệnh viện Công an với một số
          Bệnh viện lớn trong và ngoài nước có uy tín. Các cơ sở y tế CAND phối
          hợp chặt chẽ với các cơ sở y tế Nhà nước, Quân đội theo vùng, miền
          trong cấp cứu, khám chữa bệnh, phòng chống dịch bệnh, thiên tai, thảm
          họa, phục vục công tác, chiến đấu của lực lượng CAND. Đẩy mạnh cải
          cách hành chính, tăng cường ứng dụng các thành tựu khoa học, đầu tư cơ
          sở hạ tầng, ứng dụng công nghệ thông tin trong công tác y tế…
        </div>
      </Space>
    </div>
  );
};
export default NewsDetail;
