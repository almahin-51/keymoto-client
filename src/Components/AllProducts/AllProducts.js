import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { PulseLoader } from 'react-spinners';
import FetchData from '../FetchData/FetchData';
import Header from '../Home/Header/Header';
import ProductsCards from '../Home/Products_Card/ProductsCards';
import useAuth from '../hooks/useAuth';

const AllProducts = () => {
    const { products } = FetchData();
    const { isLoading } = useAuth();
    const black = true;
    return (
        <>
            <Header black={black}></Header>
            <Container className="all-products">
                <Row xs={1} md={2} lg={3} className="g-4 justify-content-center py-5">
                    {isLoading && <div className="sweet-loading text-center">
                        <PulseLoader size={20} />
                    </div>}
                    {
                        !isLoading && products.map(product => <ProductsCards key={product._id} product={product}></ProductsCards>)
                    }
                </Row>
            </Container>
        </>
    );
};

export default AllProducts;