import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPosition } from "../../redux/positionSlice";
import { Layout } from 'antd';

import Slider from "../../components/common/ui-component/slider/Slider";

import "./Home.scss";

const { Content } = Layout
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosition("TRANG CHỦ"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Content className="Home site-layout">
      <Slider />
    </Content>
  );
};
export default Home;
