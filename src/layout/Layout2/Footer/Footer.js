import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import './Footer.scss';
import items from 'assets/constant/footer';

const Footer = () => {
    return (
        <div className="Footer">
            <Container className="Footer-container">
                {
                    items.map((item, index) => (
                        <div className="footer-item" key={index}>
                            <h3 className="footer-title">{item.title}</h3>
                            <ul>
                                {
                                    item.links.map((link, index) => (
                                        <li key={index}><Link to={link.href}>{link.title}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <div className="footer-item">
                    <h3 className="footer-title">Mạng xã hội</h3>
                    <div className="social-network">
                        <div className="social-network-item"><i className="fab fa-facebook-square social-icon"></i></div>
                        <div className="social-network-item"><i className="fab fa-youtube social-icon"></i></div>
                        <div className="social-network-item"><i className="fab fa-instagram social-icon"></i></div>
                        <div className="social-network-item"><i className="fas fa-phone social-icon"></i></div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;
