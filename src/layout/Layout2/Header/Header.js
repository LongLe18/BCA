import React from 'react';
import { Container } from 'reactstrap';
import HeaderDesktop from './HeaderDesktop/HeaderDesktop';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import './Header.scss';

const Header = () => {
    return (
        <div className="Header">
            <Container>
                <HeaderDesktop />   
                <HeaderMobile />     
            </Container>
        </div>
    );
}

export default Header;
