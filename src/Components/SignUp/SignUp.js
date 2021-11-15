import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import Header from '../Home/Header/Header';
import useAuth from '../hooks/useAuth';

const SignUp = () => {
    const [logUpUser, setLogUpUser ] = useState({});
    const { signUpUser, handleSignUpGoogle } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...logUpUser };
        newData[field] = value;
        setLogUpUser(newData);
    }

    const handleSignUp = e => {
        if (logUpUser.password !== logUpUser.password2) {
            swal("Password!", "Dont Match your password", "error");
            return
        }
        else {
            signUpUser(logUpUser.email, logUpUser.password, logUpUser.name, history);
        }
        e.preventDefault();
    }

    return (
        <>
            <Header></Header>
            <div className="background">
                <Container>
                    <Row xs={1} md={2} className="justify-content-center text-center form-div pt-5">
                        <Col>
                            <h2 className="fw-bold text-white">Please Sign Up</h2>
                            <form id="signUpInForm" onSubmit={handleSignUp} className="my-5 signUp-form">
                                <Form.Floating className="mb-3">
                                    <Form.Control
                                        id="floatingNameCustom"
                                        type="text"
                                        name="name"
                                        onBlur={handleOnBlur}
                                        placeholder="Your Name"
                                        className="rounded-0"
                                    />
                                    <label htmlFor="floatingInputCustom">Your Name</label>
                                </Form.Floating>
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
                                <Form.Floating className="mb-3">
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
                                <Form.Floating>
                                    <Form.Control
                                        id="floatingPasswordCustom"
                                        type="password"
                                        name="password2"
                                        onBlur={handleOnBlur}
                                        placeholder="Password"
                                        className="rounded-0"
                                    />
                                    <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                                </Form.Floating>
                                <Button type="submit" className="form-control my-btn mt-3">Sign Up</Button>
                                <p className="text-white">--------------- OR ---------------</p>
                                <Button onClick={() => handleSignUpGoogle(history)} className="form-control my-btn mt-3">Google</Button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default SignUp;