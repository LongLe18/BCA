import React from "react";
import { Row, Col, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

import './Info.scss';

const Info = () => {
    return (
        <section className="body-info">
            <div className="container">

                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="row-body">
                    <Col className="gutter-row row-1" span={12} style={{textAlign: 'center'}}>
                        <img src={require('assets/images/bca.png')} alt="logo-bca"/>
                    </Col>
                    <Col className="gutter-row col-info" span={12} style={{textAlign: 'left'}}>
                        <h1>Giới thiệu quá trình hình thành và phát triển của Cục Y tế Bộ Công an trong 45 năm</h1>
                        <span style={{color: 'rgb(149 147 147)', fontSize: 16, lineHeight: 1.8}}>
                            Trải qua 45 năm xây dựng và trưởng thành, Cục Y tế Bộ Công an (tiền thân là 
                            Cục Bảo vệ sức khỏe) các thế hệ cán bộ, chiến sỹ, công nhân viên của Cục Y
                            tế luôn tự hào, gìn giữ và phát huy truyền thống, trí tuệ, bản lĩnh, lòng yêu 
                            nghề. Trong bất cứ hoàn cảnh nào cũng luôn làm việc quên mình, bằng tri 
                            thức và lao động khoa học sáng tạo, khắc phục mọi khó khăn gian khổ, đoàn
                            kết, nỗ lực phấn đấu, hoàn thành xuất sắc mọi nhiệm vụ được giao trong
                            công tác chăm sóc sức khỏe cán bộ, chiến sĩ, học viên, công nhân Công an 
                            và các đối tượng mà Nhà nước giao cho Bộ Công an quản lý, góp phần cùng
                             toàn lực lượng Công an nhân dân tích cực đảm bảo an ninh quốc gia, trật tự, an toàn xã hội trong tình hình mới.
                        </span>
                        <div className="readmore">
                            <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} danger size="large" style={{padding: 0}}/>
                            <a href="/#">Xem thêm </a>
                        </div>
                    </Col>  
                </Row>
            </div>
        </section>
    )
}

export default Info;