import React from "react";
import { Row, Col, Button, Card, Divider } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import './News.scss';

const News = () => {
    return (
        <section className="news-info">
            <div className="container">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 30, justifyContent: 'space-between'}}>
                    <div className="title">
                        <img src={require('assets/images/logo/logo2.png')} alt="logo-bca"/>
                        <h3>Tin tức</h3>
                    </div>
                    <div className="readmore">
                        <a href="/#">Đọc thêm </a>
                        <Button type="text" shape="circle" icon={<ArrowRightOutlined />} danger size="large" style={{padding: 0}}/>
                    </div>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 30, justifyContent: 'space-between'}}>
                    <Col span={12}>
                        <Card className="big-news"
                            hoverable
                            cover={<img alt="example" src="https://i.ex-cdn.com/doanhnhanphaply.vn/files/content/2022/08/10/tl-1042.jpg" />}
                        >
                            <div className="ant-card-meta-detail">
                                <div className="ant-card-meta-date">26 tháng 8 | <span>Thị trường</span></div>
                                <div className="ant-card-meta-title">Lorem ipsum is simply dummy text of the printing</div>
                                <div className="ant-card-meta-description">
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card className="big-news"
                            hoverable
                            cover={<img alt="example" src="http://benhvienbaichay.vn/uploads/news/63f478da53aed/z3317440601728-f55548f6d3965429534901f6789cd914-1.jpg" />}
                        >
                            <div className="ant-card-meta-detail">
                                <div className="ant-card-meta-date">26 tháng 8 | <span>Tập đoàn</span></div>
                                <div className="ant-card-meta-title">Lorem ipsum is simply dummy text of the printing</div>
                                <div className="ant-card-meta-description">
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Divider />
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 70, justifyContent: 'space-between'}}>
                    <Col span={8}>
                        <Card className="big-news little-news"
                            hoverable
                            cover={<img alt="example" src="https://i.ex-cdn.com/doanhnhanphaply.vn/files/content/2022/08/10/tl-1042.jpg" />}
                        >
                            <div className="ant-card-meta-detail">
                                <div className="ant-card-meta-date">26 tháng 8 | <span>Thị trường</span></div>
                                <div className="ant-card-meta-title">Lorem ipsum is simply dummy text of the printing</div>
                                <div className="ant-card-meta-description">
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="big-news little-news"
                            hoverable
                            cover={<img alt="example" src="http://benhvienbaichay.vn/uploads/news/63f478da53aed/z3317440601728-f55548f6d3965429534901f6789cd914-1.jpg" />}
                        >
                            <div className="ant-card-meta-detail">
                                <div className="ant-card-meta-date">26 tháng 8 | <span>Tập đoàn</span></div>
                                <div className="ant-card-meta-title">Lorem ipsum is simply dummy text of the printing</div>
                                <div className="ant-card-meta-description">
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className="big-news little-news"
                            hoverable
                            cover={<img alt="example" src="http://benhvienbaichay.vn/uploads/news/63f478da53aed/z3317440601728-f55548f6d3965429534901f6789cd914-1.jpg" />}
                        >
                            <div className="ant-card-meta-detail">
                                <div className="ant-card-meta-date">26 tháng 8 | <span>Tập đoàn</span></div>
                                <div className="ant-card-meta-title">Lorem ipsum is simply dummy text of the printing</div>
                                <div className="ant-card-meta-description">
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing. 
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing.
                                    Lorem ipsum is simply dummy text of the printing
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default News;