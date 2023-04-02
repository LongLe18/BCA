import React from "react";
import { Row, Col, Slider, Button } from 'antd'
import { ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './Slider.scss'

const SliderCustom = () => {
    return (
        <section id="slider" className="slider">
            <div className="container">

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-title">
                    <Col className="gutter-row row-1" span={10}>
                        <h1>"<br/>Quá trình hình thành và phát triển của Cục Y tế Bộ Công an trong 45 năm</h1>
                        <span>Trải qua 45 năm xây dựng và trưởng thành, cục Y tế Bộ Công An (tiền thân là Cục Bảo vệ sức khoẻ) các thế hệ cán bộ, chiến sỹ...</span>
                        <div className="readmore">
                            <a href="/#">Đọc thêm <ArrowRightOutlined style={{color: '#ffdf00'}}/></a>
                        </div>
                    </Col>
                    <Col className="gutter-row image-col" span={12} style={{textAlign: 'right'}}>
                        <img src={require('assets/images/download.jpeg')} alt="hình ảnh slider"/>
                    </Col>  
                    
                </Row>

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-2">
                    <h5 className="label-slider">01 / 03</h5>
                    <Slider defaultValue={0} disabled={true}/>
                    <div className="d-flex justify-content-between button-next">
                        <Button icon={<ArrowLeftOutlined />} shape="circle" size={"large"} style={{padding: 0}}/>
                        <Button icon={<ArrowRightOutlined />} shape="circle" size={"large"} style={{padding: 0}}/>
                    </div>
                </Row>
                <span className="scrolldown">KÉO XUỐNG</span>
            </div>
        </section>
    )
}
export default SliderCustom;