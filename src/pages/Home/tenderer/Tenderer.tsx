import React from 'react';
import { Row, Col, Button, Card, Divider } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import './Tenderer.scss'

const Tenderer = () => {
    return (
        <section className="tenderer-info">
            <div className="container">
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 30, justifyContent: 'space-between'}}>
                    <div className="title">
                        <img src={require('assets/images/logo/logo2.png')} alt="logo-bca"/>
                        <h3>Thông báo mời thầu</h3>
                    </div>
                </Row>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 30, justifyContent: 'space-between'}}>
                    <Col span={14}>
                        <Card className="tenderer-news"
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
                        <Divider />
                        <Card className="tenderer-news"
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
                        <Divider />
                        <Card className="tenderer-news"
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
                        <Divider />
                        <Card className="tenderer-news"
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
                        <Divider />
                    </Col>
                    <Col span={10} className="document-guide">
                        <div className='title-notice'><Divider type="vertical"/> Văn bản hướng dẫn</div>
                        <Button type='text' className='notice-button'>
                            <div>
                                <img src={require('assets/images/icon/word.png')} alt="icon-document"/>
                                Thông báo thay đổi nhân sự
                            </div>
                            <DownloadOutlined />
                        </Button>
                        <Button type='text' className='notice-button'>
                            <div>
                                <img src={require('assets/images/icon/ppt.png')} alt="icon-document"/>
                                Thông báo thay đổi nhân sự
                            </div>
                            <DownloadOutlined />
                        </Button>
                        <Button type='text' className='notice-button'>
                            <div>
                                <img src={require('assets/images/icon/excel.png')} alt="icon-document"/>
                                Thông báo thay đổi nhân sự
                            </div>
                            <DownloadOutlined />
                        </Button>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Tenderer;
