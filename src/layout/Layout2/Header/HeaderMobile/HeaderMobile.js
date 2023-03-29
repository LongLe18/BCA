import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMobile.scss';
import menu from 'assets/constant/menu';

const HeaderMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="HeaderMobile">
            <div className="header-mobile">
                <div className="header-logo-mobile">LOGO</div>
                <div className="header-mobile-menu" onClick={handleOpenMenu}><i className="fas fa-bars"></i><span>Menu</span></div>
            </div>
            {
                isOpen &&
                <div className="header-nav-mobile">
                    <ul className="header-nav-body-mobile">
                        {
                            menu.map((item, index) => (
                                <li key={index} className="header-nav-item-mobile"><Link to={item.href}>{item.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default HeaderMobile;
