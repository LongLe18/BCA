import React, {useEffect} from "react";

import { Layout, Breadcrumb, Row, Col, Button, Menu } from "antd";
import type { MenuProps } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import "./Department.scss";

const { Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('MỤC LỤC', 'sub1', [
        getItem('Thông tin chung', '1'), 
        getItem('Vị trí và chức năng', '2'), 
        getItem('Nhiệm vụ', '3'),
        getItem('Danh hiệu thi đua và khen thưởng', '4')
    ]),
];

const Department = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Content className="site-layout">
            <section className="Department">
                <div className="container">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 30, justifyContent: 'space-between', alignItems: 'end'}}>
                        <div className="title">
                            <img src={require('assets/images/bca.png')} alt="logo-bca"/>
                            <div>
                                <Breadcrumb style={{fontSize: 16, marginBottom: 10}}
                                    items={[
                                        {
                                            title: <a href="/" style={{color: '#9b9b9a'}}>Trang chủ</a>,
                                        },
                                        {
                                            title: <a href="/#" style={{color: '#fff'}}>Phòng tổng hợp</a>,
                                        },
                                    ]}
                                />
                                <h3>Phòng tổng hợp</h3>
                            </div>
                        </div>
                        <div className="readmore">
                            <Button type="primary" shape="circle" icon={<ArrowDownOutlined />} danger size="large"/>
                            <a href="/#">Kéo xuống </a>
                        </div>
                    </Row>
                </div>
            </section>
            <section className="Department-content">
                <div className="container">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 100, justifyContent: 'space-between'}}>
                        <Col span={16} className="left-content">
                            <div className="title">
                                <img src={require('assets/images/bca.png')} alt="logo-bca"/>
                                <h3>Thông tin chung</h3>
                            </div>
                            <div style={{paddingRight: 24,}}>
                                <b style={{fontWeight: 500, fontSize: 20,}}>1. Trong thời kì đầu xây dựng chủ nghĩa xã hội và bảo vệ Tổ quốc (Giai đoạn 1977 - 1986).</b><br/><br/>
                                <div style={{color: '#5f6061', fontSize: 16,}}>
                                Ngày 21/01/1977, Bộ Nội vụ đã tham mưu, đề xuất Thủ tướng Chính phủ ban hành Quyết định số 08/CP tách Vụ Tài vụ - Vật tư thành 05 Vụ, Cục trong đó có Cục Bảo vệ sức khỏe (nay là Cục Y tế). Từ đây, Cục Bảo vệ sức khỏe hoạt động có tính chất chuyên sâu về chuyên môn (cả đào tạo, bồi dưỡng cán bộ, nghiên cứu khoa học..) và mở rộng, phát triển mạng lưới trong toàn ngành.<br/><br/>
                                Ngày 18/4/1978, Bộ trưởng Bộ Nội vụ ký Quyết định số 57/QĐ - BNV quy định nhiệm vụ, tổ chức của Cục Bảo vệ sức khỏe trực thuộc Bộ Nội vụ, có nhiệm vụ giúp Bộ trưởng nghiên cứu, chỉ đạo công tác y tế, công tác bảo vệ bà mẹ, trẻ em trong toàn lực lượng Công an nhân dân, tổ chức tốt mạng lưới y tế, mang lưới nhà trẻ nhằm không ngừng nâng cao sức khỏe cho cán bộ, chiến sĩ, đáp ứng yêu cầu công tác, chiến đấu của Ngành.<br/><br/>
                                Ngày 20/12/1981, Bộ trưởng Bộ Nội vụ ký Quyết định số 105/QĐ-BNV quy định nhiệm vụ, quyền hạn và tổ chức Cục Y tế. Theo quyết định này, Cục Y tế trực thuộc Tổng Cục Hậu cần Công an nhân dân, thống nhất quản lý và chỉ đạo công tác y tế trong toàn lực lượng Công an nhân dân theo đúng đường lối, chủ trương của Đảng, Nhà nước đối với lực lượng vũ trang, nhằm bảo vệ và nâng cao sức khỏe cho cán bộ, chiến sĩ, đáp ứng yêu cầu chiến đấu, công tác của lực lượng Công an nhân dân.<br/><br/>
                                Sau ngày miền Nam giải phóng, lực lượng Công an tham gia tích cực vào Công tác bảo vệ an ninh, trật tự ở thành phố Hồ Chí Minh, góp phần vào công cuộc cải tạo, xây dựng thành phố, ổn định tình hình trật tự xã hội, xây dựng thành phố. Nhờ những bước phát triển vượt bậc về hệ thống mạng lưới, Y tế Công an nhân dân đã góp phần không nhỏ vào quá trình cải tạo xã hội sau chiến tranh, phục vụ chiến đấu, cứu chữa thương bệnh binh.<br/><br/>
                                Trong khoảng 10 năm, lực lượng y tế Công an đã bước đầu triển khai công tác chăm sóc sức khoẻ, chủ động phòng chống dịch. Nhờ sự phát triển hơn về cơ sở vật chất trong thời bình, Y tế Công an nhân dân đã quan tâm chú trọng nâng cao sức khoẻ bằng chế độ điều dưỡng, nghỉ mát. Thực hiện có hiệu quả công tác quản lý dược chính, đảm bảo cung cấp thuốc, trang thiết bị, dụng cụ y tế cho các Bệnh viện,<br/><br/>
                                </div>
                            </div>
                        </Col>
                        <Col span={8} className="right-content">
                            <Menu style={{backgroundColor: 'transparent'}}
                                onClick={onClick}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                                mode="inline"
                                items={items}
                            />
                        </Col>
                    </Row>
                </div>
            </section>
        </Content>
    )
}

export default Department;