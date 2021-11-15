import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Header from '../Home/Header/Header';
import useAuth from '../hooks/useAuth';

const LogIn = () => {
    const [logInUserData, setLogInUserData] = useState({});
    const { logInUser, handleSignUpGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...logInUserData };
        newUser[field] = value;
        setLogInUserData(newUser);
    }

    const handleLogIn = (e) => {
        logInUser(logInUserData.email, logInUserData.password, location, history);
        e.preventDefault();
    }



    return (
        <>
            <Header></Header>
            <div className="background">
                <Container>
                    <Row xs={1} md={2} className="justify-content-center text-center form-div pt-5">
                        <Col>
                            <h2 className="fw-bold text-white">LogIn</h2>
                            <form id="logInForm" onSubmit={handleLogIn} className="my-5 signUp-form">
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingInputCustom"
                                        type="email"
                                        name="email"
                                        onBlur={handleOnBlur}
                                        placeholder="name@example.com"
                                        className="rounded-0"
                                    />
                                    <label htmlFor="floatingInputCustom">Email address</label>
                                </Form.Floating>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                        placeholder="Password"
                                        className="rounded-0"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Password</label>
                                </Form.Floating>
                                <Button type="submit" className="form-control my-btn mt-2 mb-3">LogIn</Button>
                                <p className="text-white">--------------- OR ---------------</p>
                                <Button onClick={()=>handleSignUpGoogle(history)} className="form-control my-btn mt-3">Google</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default LogIn;