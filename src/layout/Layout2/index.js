import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout = () => {
    return (
        <div className="MainLayout">
            <Header></Header>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;
