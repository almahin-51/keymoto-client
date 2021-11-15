import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import swal from "sweetalert";
import useAuth from "../hooks/useAuth";

function MyVerticallyCenteredModal(props) {
    const { user } = useAuth();
    const initialInfo = { email: user.email, name: user.displayName };
    const [userInfo, setUserInfo] = useState(initialInfo);
    const { modelName } = props.product;

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...userInfo };
        newUser[field] = value;
        setUserInfo(newUser);
    }

    const history = useHistory();

    const handleFormSubmit = (e) => {
        // collect data 
        const addCart = {
            ...userInfo,
            bike: props.product,
            status: 'Pending'
        }

        // send to server
        fetch('https://hidden-thicket-41796.herokuapp.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCart)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good job!", "You are purchases the product!", "success")
                        .then((e) => {
                            props.onHide();
                            history.push('/dashboard/my_orders')
                        });
                }
            })

        e.preventDefault();
    }



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="form-modal"
        >
            <h2 className="fw-bold text-center mt-4 text-red">{modelName}</h2>
            <form id="signUpInForm" onSubmit={handleFormSubmit} className="my-5 px-3 signUp-form">
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingNameCustom"
                        type="text"
                        defaultValue={user.displayName}
                        placeholder="Your Name"
                        className="rounded-0"
                    />
                    <label htmlFor="floatingInputCustom">Your Name</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        defaultValue={user.email}
                        placeholder="Email"
                        className="rounded-0"
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="number"
                        name="phone"
                        onBlur={handleOnBlur}
                        placeholder="phone"
                        className="rounded-0"
                    />
                    <label htmlFor="floatingPasswordCustom">Phone</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        name="country"
                        onBlur={handleOnBlur}
                        placeholder="country"
                        className="rounded-0"
                    />
                    <label htmlFor="floatingPasswordCustom">Country</label>
                </Form.Floating>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        name="city"
                        onBlur={handleOnBlur}
                        placeholder="City"
                        className="rounded-0"
                    />
                    <label htmlFor="floatingPasswordCustom">City</label>
                </Form.Floating>
                <Button type="submit" className="form-control text-red my-btn mt-3 text-black">SUBMIT</Button>
            </form>

        </Modal>
    );
}

export default MyVerticallyCenteredModal;