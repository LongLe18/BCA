import React, {useEffect} from "react";

import {Layout} from "antd";

import Slider from "../../components/common/ui-component/slider/Slider";
import Info from "./info/Info";
import Department from "./department/Department";
import Timetable from "./timetable/Timetable";
import News from "./news/News";
import HomeRecruitment from "./recruitment/Recruitment";
import Tenderer from "./tenderer/Tenderer";

import "./Home.scss";
import {useDispatch} from "react-redux";

const {Content} = Layout;
const Home = () => {
  useEffect(() => {
    // const globalPolling = useTypedSelector(job);
    // console.log(globalPolling);
  }, []);

  return (
    <Content className="Home site-layout">
      <Slider />
      <Info />
      <Department />
      <Timetable />
      <News />
      <HomeRecruitment />
      <Tenderer />
    </Content>
  );
};
export default Home;
