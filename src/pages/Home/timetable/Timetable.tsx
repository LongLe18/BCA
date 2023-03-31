import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

import './Timetable.scss'

const Timetable = () => {
    return (
        <section className="timetable-info">
            <div className="container">
                <Link to="" className="timetable-logo">
                    <img
                        src={require('assets/images/bca.png')}
                        alt="Logo BCA"
                        className="img-fluid"
                    />
                    <h5>Lịch làm việc trong giờ hành chính</h5>
                </Link>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{justifyContent: 'space-around'}}>
                    <Col className="gutter-row col-info" span={7}>
                        <div className="d-flex justify-content-between one-box">
                            <img src={require('assets/images/icon/phone.png')} alt="phone"/>
                            <h5>Hotline</h5>
                            <div className="detail">
                                <span>Điện thoại: 0692320011</span>
                                <span>Fax: 02439428478</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row col-info" span={7}>
                        <div className="d-flex justify-content-between one-box">
                            <img src={require('assets/images/icon/time.png')} alt="time"/>
                            <h5>Thời gian làm việc</h5>
                            <div className="detail">
                                <span>Từ thứ 2 đến thứ 6</span>
                                <span>Từ thứ 7h30 đến 16h</span>
                            </div>
                        </div>
                    </Col>
                    <Col className="gutter-row col-info" span={7}>
                        <div className="d-flex justify-content-between one-box">
                            <img src={require('assets/images/icon/location.png')} alt="location"/>
                            <h5>Địa chỉ</h5>
                            <div className="detail">
                                <span>47 Phạm Văn Đồng, Cầu giấy, <br/>Hà Nội.</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
} 
export default Timetable;