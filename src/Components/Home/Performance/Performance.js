import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgAbout from '../../../image/img-about.jpg';
import aboutOne from '../../../image/about-gallery-1.jpg'
import aboutTwo from '../../../image/about-gallery-2.jpg'
import one from '../../../image/about-1.svg';
import two from '../../../image/about-2.svg';
import there from '../../../image/about-3.svg';
import four from '../../../image/about-4.svg';

const Performance = () => {
    return (
        <Container className="my-5 py-5">
            <Row xs={1} md={2} className="">
                <Col xs md="5" className="about-main">
                    <img className="w-100" src={imgAbout} alt="" />
                    <Row className="about-gallery">
                        <Col><img className="img-fluid" src={aboutOne} alt="" /></Col>
                        <Col><img className="img-fluid" src={aboutTwo} alt="" /></Col>
                    </Row>
                </Col>
                <Col className="about-details">
                    <div className="about-head">
                        <span className='heigh-light'>Taking rides to a newer level</span>
                        <h1>GREAT PERFORMANCE
                            <br />
                            THAT MATTERS IN FUTURE
                        </h1>
                        <p>Dolore magna aliqua quis nostrud exercitation ullamco laboris nisi ut aliquip exa comads consequat asuis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore fugiat sed ipsum nulla pariatur nostrul done elit magna.</p>
                    </div>
                    <Row xs={1} sm={2} className="g-4 my-4">
                        <Col className="d-flex">
                            <img className="img-fluid me-3" src={one} alt="" />
                            <div>
                                <h6>Cutting Edge Tech</h6>
                                <p>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <img className="img-fluid me-3" src={two} alt="" />
                            <div>
                                <h6>Perfect Styling</h6>
                                <p>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <img className="img-fluid me-3" src={there} alt="" />
                            <div>
                                <h6>Distinctive Beauty</h6>
                                <p>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                            </div>
                        </Col>
                        <Col className="d-flex">
                            <img className="img-fluid me-3" src={four} alt="" />
                            <div>
                                <h6>Radiance Polishing</h6>
                                <p>Exercitation ullamco laboris nis exa duis aute irure dolor.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Performance;