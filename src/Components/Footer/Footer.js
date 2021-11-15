import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../image/logo.svg';
import newsOne from '../../image/news-thumb-1.jpg'
import newsTwo from '../../image/news-thumb-2.jpg'
import newsThere from '../../image/news-thumb-3.jpg'


const Footer = () => {
    return (
        <div className="footer text-white">
            <Container>
                <Row xs={1} md={2} lg={4} className="py-5 g-3 ">
                    <Col >
                        <div className="footer-logo pb-5">
                            <img src={logo} alt="" />
                            <h5 className="text-white">KEYMOTO</h5>
                        </div>
                        <p className="footer-logo-p">Get a feel for the weight distribution: Lean from side to side, move forward and backward, and generally get a feel for how the motorcycle feels under you.</p>

                        <div className="footer-talk-card mt-5 mb-4">
                            <i className="fas fa-headphones p-1 fs-1 me-3"></i>
                            <div>
                                <p>Talk with our support</p>
                                <h5>+8801751-210150</h5>
                            </div>
                        </div>
                        <div className="footer-social-icon text-center">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-google-plus-g"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest-p"></i>
                        </div>
                    </Col>
                    <Col className="footer-about mt-5">
                        <h5 className="mb-4">About KeyMoto</h5>
                        <p><i className="fas fa-caret-right"></i> Our Company</p>
                        <p><i className="fas fa-caret-right"></i> Renting Facility</p>
                        <p><i className="fas fa-caret-right"></i> keyMoto Inventory</p>
                        <p><i className="fas fa-caret-right"></i> Our Services</p>
                        <p><i className="fas fa-caret-right"></i> Clients Testimonials</p>
                        <p><i className="fas fa-caret-right"></i> Mission & Vision</p>
                        <p><i className="fas fa-caret-right"></i> Contact Us</p>
                    </Col>
                    <Col className="news mt-5">
                        <h5 className="ms-2 mb-4">Latest News</h5>
                        <div className="d-flex">
                            <img src={newsOne} className="w-50 h-50" alt="" />
                            <div className="mt-0">
                                <h6>We Allow Each Rider To Customize Their Rides.</h6>
                                <p>August 25, 2021</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={newsTwo} className="w-50 h-50" alt="" />
                            <div className="mt-0">
                                <h6>Motorcycles Which Feels Just Right Like Ease.</h6>
                                <p>August 25, 2021</p>
                            </div>
                        </div>
                        <div className="d-flex">
                            <img src={newsThere} className="w-50 h-50" alt="" />
                            <div className="mt-0">
                                <h6>Gaze Upon Unbelievably Exciting To Futuristic.</h6>
                                <p>August 25, 2021</p>
                            </div>
                        </div>
                    </Col>
                    <Col className="mt-5 info">
                        <h5 className="mb-4">Dealer Information</h5>
                        <div className="mb-3">
                            <h6>SALES HOURS</h6>
                            <p>Monday - Friday:</p>
                            <p>09:00 am to 06:00 pm</p>
                        </div>
                        <div className="mb-3">
                            <h6>SALES HOURS</h6>
                            <p>Monday - Friday:</p>
                            <p>09:00 am to 06:00 pm</p>
                        </div>
                        <div>
                            <h6>PARTS SHOP HOURS</h6>
                            <p>Monday - Friday:</p>
                            <p>09:00 am to 06:00 pm</p>
                        </div>
                    </Col>
                </Row>
                <div className="text-center py-5 footer-bottom">
                    <p>(c) 2021 KEYMOTO - Motorcycles Dealer. All rights reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;