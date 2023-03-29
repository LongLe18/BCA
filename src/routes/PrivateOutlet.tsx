import React from "react";
import {Navigate, Outlet} from "react-router-dom";
const PrivateOutlet = () => {
  const auth = false;
  return auth ? <Outlet /> : <Navigate to="/dang-nhap" />;
};
export default PrivateOutlet;
