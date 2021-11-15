import React from 'react';
import { Container, Row } from 'react-bootstrap';
import logo from '../../../image/logo-dark.svg';
import useAuth from '../../hooks/useAuth';
import ProductsCards from '../Products_Card/ProductsCards';
import { PulseLoader } from 'react-spinners';
import FetchData from '../../FetchData/FetchData';


const Products = () => {
    const {products} = FetchData();
    const { isLoading } = useAuth();

    return (
        <Container className="my-5 pt-5">
            <div className="text-center">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="mt-4">
                    <h5 className='heigh-light'>TAKING RIDES TO A NEWER LEVEL</h5>
                    <h1 className="header-second mt-3">CHOOSE A MOTORCYCLE</h1>
                    <p className="w-50 mx-auto text-secondary mt-4">Get a feel for the weight distribution: Lean from side to side, move forward and backward, and generally get a feel for how the motorcycle feels under you.</p>
                </div>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4 mt-5 justify-content-center">
                {isLoading && <div className="sweet-loading text-center">
                    <PulseLoader  size={20} />
                </div>}
                {
                    !isLoading && products.slice(0, 6).map(product => <ProductsCards key={product._id} product={product}></ProductsCards>)
                }
            </Row>
        </Container>
    );
};

export default Products;