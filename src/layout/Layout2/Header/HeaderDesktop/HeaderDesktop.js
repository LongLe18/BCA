import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HeaderDesktop.scss";
import menu from "assets/constant/menu";

const HeaderDesktop = () => {
    const position = useSelector((state) => state.position);

    return (
        <div className="HeaderDesktop">
            <div className="Header-top">
                <div className="header-icons">
                    <i className="fab fa-facebook-square h-icon"></i>
                    <i className="fab fa-youtube h-icon"></i>
                    <i className="fab fa-instagram h-icon"></i>
                    <i className="fas fa-phone-square h-icon"></i>
                </div>
                <div className="header-logo"></div>
                <div className="header-phone">
                    <i className="fas fa-phone-alt"></i>
                    <span>+0879610286</span>
                </div>
            </div>
            <div className="header-nav">
                <ul className="header-nav-body">
                    {menu.map((item, index) => {
                        if (position === item.title) {
                            return (
                                <li
                                    key={index}
                                    className="header-nav-item nav-item-focused"
                                >
                                    <Link to={item.href}>{item.title}</Link>
                                </li>
                            );
                        }
                        return (
                            <li key={index} className="header-nav-item">
                                <Link to={item.href}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default HeaderDesktop;
