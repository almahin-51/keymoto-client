import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import Header from '../Home/Header/Header';
import useAuth from '../hooks/useAuth';
import MyVerticallyCenteredModal from './ProductForm';

const ProductsDetails = () => {
    const [product, setProduct] = useState('');
    const { id } = useParams();
    const [toggle, setToggle] = useState(true);
    const { isLoading, user } = useAuth();

    const { modelName, price, poweredBy, img, year, type, brand, engineType, enginePower, displacement, bore, description } = product;
    
    const black = true;

    useEffect(() => {
        fetch(`https://hidden-thicket-41796.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            });
    }, []);

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <Header black={black}></Header>
            <Container className="p-details">
                {isLoading && <div className="sweet-loading text-center">
                    <PulseLoader size={20} />
                </div>}
                <Row className="py-5">
                    <Col>
                        <Card className="border-1 card-background flex-row">
                            <Row>
                                <Col xs={12} md={6}>
                                    <Card.Img src={img} />
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
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card.Title className="card-titles flex-column align-items-center">
                                        <div className="lg-menu-profile mb-2" onClick={() => setToggle(!toggle)}>
                                            {user.photoURL ? <img className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                                                : <div className="menu-name">{user?.email?.slice(0, 1)}</div>}
                                        </div>
                                        <h5>{user.displayName}</h5>
                                        <h6>{user.email}</h6>
                                    </Card.Title>
                                    <Card.Header className="d-flex bg-transparent border-0 justify-content-between align-items-center p-4">
                                        <div>
                                            <h5 className="card-name">{modelName}</h5>
                                            <p>POWERED BY {poweredBy}</p>
                                        </div>
                                        <div>
                                            <h4 className="card-price">${price}</h4>
                                        </div>
                                    </Card.Header>
                                    <Card.Title className="card-titles flex-column text-justify">
                                        <p>{description}</p>
                                    </Card.Title>
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
                                    </Card.Body>
                                    <Card.Footer className="border-0 bg-transparent text-center pb-3">
                                        <button onClick={() => setModalShow(true)} className="bg-transparent text-black py-2 px-3 my-btn">PURCHASE</button>
                                    </Card.Footer>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        product={product}
                    />
                </Row>
            </Container>
        </>
    );
};

export default ProductsDetails;