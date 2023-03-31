import React, {useEffect} from "react";

import { Layout, Breadcrumb, Row, Col, Button, Menu } from "antd";
import type { MenuProps } from 'antd';
import { ArrowDownOutlined } from '@ant-design/icons';
import "./Introduce.scss";

const {Content} = Layout;

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
  getItem('QUÁ TRÌNH XÂY DỰNG, TRƯỞNG THÀNH', 'sub1', [
    getItem('Giai đoạn 1 (Từ 1977 - 1986)', '1'), 
    getItem('Giai đoạn 2 (Từ 1986 - 2016)', '2'), 
    getItem('Giai đoạn 3 (Từ 2016 - đến nay)', '3')
  ]),

  getItem('DANH HIỆU VÀ PHẦN THƯỞNG', 'sub2', [
    getItem('Huân chương', '4'),
    getItem('Cờ thi đua', '5'),
    getItem('Danh hiệu thầy thuốc nhân dân', '6'),
    getItem('Danh hiệu thầy thuốc ưu tú', '7'),
  ]),

  getItem('CHỨC NĂNG NHIỆM VỤ', 'sub3', [
    getItem('Chức năng nhiệm vụ', '8'),
  ]),
];

const Home = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content className="Introduce site-layout">
      <section className="first-introduce">
        <div className="container">
          <Breadcrumb style={{fontSize: 16,}}
            items={[
              {
                title: <a href="/">Trang chủ</a>,
              },
              {
                title: 'Giới thiệu',
              },
            ]}
          />
          <Row  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 150, marginTop: 30, justifyContent: 'space-between'}}>
            <Col span={12} className="left-introduce">
              <div className="title-introduce">Giới thiệu quá trình hình thành và phát triển của Cục Y tế Bộ Công an trong 45 năm</div>
              <img src={require('assets/images/bca.png')} alt="logo-bca"/>
            </Col>
            <Col span={12} className="right-introduce">
              <div className="detail-introduce">
                Trải qua 45 năm xây dựng và trưởng thành, Cục Y tế Bộ Công an (tiền thân là Cục Bảo vệ sức khỏe) các thế hệ cán bộ, chiến sỹ, công nhân viên của Cục Y tế luôn tự hào, gìn giữ và phát huy truyền thống, trí tuệ, bản lĩnh, lòng yêu nghề. Trong bất cứ hoàn cảnh nào cũng luôn làm việc quên mình, bằng tri thức và lao động khoa học sáng tạo, khắc phục mọi khó khăn gian khổ, đoàn kết, nỗ lực phấn đấu, hoàn thành xuất sắc mọi nhiệm vụ được giao trong công tác chăm sóc sức khỏe cán bộ, chiến sĩ, học viên, công nhân Công an và các đối tượng mà Nhà nước giao cho Bộ Công an quản lý, góp phần cùng toàn lực lượng Công an nhân dân tích cực đảm bảo an ninh quốc gia, trật tự, an toàn xã hội trong tình hình mới.
                <br/>
                <br/>
                Trong suốt chặng đường 45 năm xây dựng và trưởng thành, các thế hệ cán bộ chiến sỹ, công nhân viên của Cục Y tế luôn đoàn kết, đồng sức, đồng lòng, ra sức rèn luyện, tu dưỡng, hoàn thành xuất sắc mọi nhiệm vụ mà Đảng ủy Công an Trung ương, lãnh đạo Bộ Công an giao phó. Qua đó, tạo ra sức bật quan trọng cho sự lớn mạnh không ngừng về mọi mặt của lực lượng Y tế Công an nhân dân đồng thời góp phần không nhỏ cùng với các lực lượng khác trong toàn lực lượng Công an nhân dân thực hiện thắng lợi nhiệm vụ bảo vệ an ninh chính trị, giữ gìn trật tự, an toàn xã hội, thúc đẩy tích cực sự nghiệp đổi mới của đất nước.
                <div className="readmore">
                    <Button type="primary" shape="circle" icon={<ArrowDownOutlined />} danger size="large" style={{padding: 0}}/>
                    <a href="/#">Kéo xuống </a>
                </div>
              </div>
            </Col>
          </Row>
          
        </div>
      </section>
      <section className="second-introduce">
        <div className="container">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{marginBottom: 100, justifyContent: 'space-between'}}>
            <Col span={16} className="left-content">
              <div className="title">
                <img src={require('assets/images/bca.png')} alt="logo-bca"/>
                <h3>Quá trình xây dựng và trưởng thành</h3>
                    
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
  );
};
export default Home;
