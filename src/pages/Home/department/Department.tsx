import React from "react";
import { Link } from "react-router-dom";
import { Row, Carousel } from 'antd';

import './Department.scss'

const Department = () => {
    return (
        <section className="department-info">
            <div className="container">
                <Link to="" className="department-logo">
                    <img
                        src={require('assets/images/bca.png')}
                        alt="Logo BCA"
                        className="img-fluid"
                    />
                    <h5>Các Phòng Ban</h5>
                </Link>
                <Carousel autoplay style={{height: 400}} arrows={true}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="rowcarousel"> 
                        <img src={require('assets/images/department1.png')} alt="department1"/>
                        <img src={require('assets/images/department2.png')} alt="department2"/>
                        <img src={require('assets/images/department3.png')} alt="department3"/>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="rowcarousel"> 
                        <img src={require('assets/images/department4.png')} alt="department4"/>
                        <img src={require('assets/images/department5.png')} alt="department5"/>
                        <img src={require('assets/images/department6.png')} alt="department6"/>
                    </Row>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="rowcarousel"> 
                        <img src={require('assets/images/department7.png')} alt="department7"/>
                    </Row>
                </Carousel>
            </div>
        </section>
    )
} 
export default Department;