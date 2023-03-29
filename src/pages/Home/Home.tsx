import React, { useEffect } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { setPosition } from "../../redux/positionSlice";

import "./Home.scss";
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPosition("TRANG CHỦ"));
  }, []);
  
  return (
    <div className="Home">
      <Button type="primary">Trang chủ</Button>
    </div>
  );
};
export default Home;
