import React from "react";
import {Row, Col, Slider, Button, Space, Carousel} from "antd";
import {ArrowRightOutlined, ArrowLeftOutlined} from "@ant-design/icons";
import "./Slider.scss";

const SliderCustom = () => {
  return (
    <section id="slider" className="slider">
      <div className="container">
        <Carousel effect="fade">
          <div>
            {" "}
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} className="row-title">
              <Col className="gutter-row row-1" span={10}>
                <h1>
                  "<br />
                  Quá trình hình thành và phát triển của Cục Y tế Bộ Công an
                  trong 45 năm
                </h1>
                <span>
                  Trải qua 45 năm xây dựng và trưởng thành, cục Y tế Bộ Công An
                  (tiền thân là Cục Bảo vệ sức khoẻ) các thế hệ cán bộ, chiến
                  sỹ...
                </span>
                <div className="readmore">
                  <a href="/#">
                    <Space>
                      <span style={{color: "#ffdf00"}}>Đọc thêm</span>{" "}
                      <div className="arrow-icon">
                        <ArrowRightOutlined style={{color: "#ffdf00"}} />
                      </div>
                    </Space>
                  </a>
                </div>
              </Col>
              <Col
                className="gutter-row image-col"
                span={12}
                style={{textAlign: "right"}}
              >
                <img
                  src={
                    "https://bocongan.gov.vn/knd/tt/PublishingImages/NguyenPhuongAnh/2022/2/bca_0132.jpg"
                  }
                  alt="hình ảnh slider"
                />
              </Col>
            </Row>
          </div>
          <div>
            {" "}
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} className="row-title">
              <Col className="gutter-row row-1" span={10}>
                <h1>
                  "<br />
                  Quá trình hình thành và phát triển của Cục Y tế Bộ Công an
                  trong 45 năm
                </h1>
                <span>
                  Trải qua 45 năm xây dựng và trưởng thành, cục Y tế Bộ Công An
                  (tiền thân là Cục Bảo vệ sức khoẻ) các thế hệ cán bộ, chiến
                  sỹ...
                </span>
                <div className="readmore">
                  <a href="/#">
                    <Space>
                      <span style={{color: "#ffdf00"}}>Đọc thêm</span>{" "}
                      <div className="arrow-icon">
                        <ArrowRightOutlined style={{color: "#ffdf00"}} />
                      </div>
                    </Space>
                  </a>
                </div>
              </Col>
              <Col
                className="gutter-row image-col"
                span={12}
                style={{textAlign: "right"}}
              >
                <img
                  src={
                    "https://img.cand.com.vn/resize/800x800/NewFiles/Images/2022/02/21/3_ve-1645405902719.jpg"
                  }
                  alt="hình ảnh slider"
                />
              </Col>
            </Row>
          </div>
          <div>
            {" "}
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} className="row-title">
              <Col className="gutter-row row-1" span={10}>
                <h1>
                  "<br />
                  Quá trình hình thành và phát triển của Cục Y tế Bộ Công an
                  trong 45 năm
                </h1>
                <span>
                  Trải qua 45 năm xây dựng và trưởng thành, cục Y tế Bộ Công An
                  (tiền thân là Cục Bảo vệ sức khoẻ) các thế hệ cán bộ, chiến
                  sỹ...
                </span>
                <div className="readmore">
                  <a href="/#">
                    <Space>
                      <span style={{color: "#ffdf00"}}>Đọc thêm</span>{" "}
                      <div className="arrow-icon">
                        <ArrowRightOutlined style={{color: "#ffdf00"}} />
                      </div>
                    </Space>
                  </a>
                </div>
              </Col>
              <Col
                className="gutter-row image-col"
                span={12}
                style={{textAlign: "right"}}
              >
                <img
                  src={
                    "http://vienhuyethoc.vn/wp-content/uploads/2020/08/a4.jpg"
                  }
                  alt="hình ảnh slider"
                />
              </Col>
            </Row>
          </div>
        </Carousel>

        <span className="scrolldown">KÉO XUỐNG</span>
      </div>
    </section>
  );
};
export default SliderCustom;
