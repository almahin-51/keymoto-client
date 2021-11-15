import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductsCards = ({product}) => {
    const { _id, modelName, price, poweredBy, img, year, type, brand, engineType, enginePower, displacement, bore } = product;
    return (
        <Col>
            <Card className="border-0 card-background h-100">
                <Card.Header className="d-flex bg-transparent border-0 justify-content-between align-items-center p-4">
                    <div>
                        <h5 className="card-name">{modelName}</h5>
                        <p>POWERED BY {poweredBy}</p>
                    </div>
                    <div>
                        <h4 className="card-price">${price}</h4>
                    </div>
                </Card.Header>
                <Card.Img src={img} />
                <Card.Body className="">
                    <Card.Title className="card-titles">
                        <div className="branding">
                            <h6>YEAR</h6>
                            <p>{year}</p>
                        </div>
                        <div className="branding">
                            <h6>TYPE</h6>
                            <p>{type}</p>
                        </div>
                        <div className="branding border-0">
                            <h6>MAKE</h6>
                            <p>{brand}</p>
                        </div>
                    </Card.Title>
                    <Card.Title>
                        <Row xs={2} className="g-4 p-3">
                            <Col className="d-flex engine-d">
                                <i className="fab fa-typo3"></i>
                                <div>
                                    <p>ENGINE TYPE</p>
                                    <p>{engineType}</p>
                                </div>
                            </Col>
                            <Col className="d-flex engine-d">
                                <i className="fas fa-bolt"></i>
                                <div>
                                    <p>ENGINE POWER</p>
                                    <p>{enginePower}</p>
                                </div>
                            </Col>
                            <Col className="d-flex engine-d">
                                <i className="fas fa-head-side-mask"></i>
                                <div>
                                    <p>DISPLACEMENT</p>
                                    <p>{displacement}</p>
                                </div>
                            </Col>
                            <Col className="d-flex engine-d">
                                <i className="fas fa-map-pin"></i>
                                <div>
                                    <p>BORE/STROKE</p>
                                    <p>{bore}</p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Title>
                </Card.Body>
                <Card.Footer className="border-0 bg-transparent text-center pb-3">
                    <Link to={`/bikes/${_id}`}><button className="bg-transparent card-btn">LEARN MORE</button></Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProductsCards;