import React, { useState } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import swal from 'sweetalert';

const AddProduct = () => {

    const [newProduct, setNewProduct] = useState('');

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newUser = { ...newProduct };
        newUser[field] = value;
        setNewProduct(newUser);
    }
    const handleFormSubmit = (e) => {

        fetch('https://hidden-thicket-41796.herokuapp.com/motorbikes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json()).then(data => {
            if (data.insertedId) {
                swal("Great!", "Add Product successfully!", "success")
                    .then(e => {
                        if (e) {
                            document.getElementById('addProduct').reset()
                        }
                    });
                
            }
        })
        e.preventDefault();
    }

    return (
        <div className="container mb-5 pb-4">
            <h2 className="fw-bold text-center my-4 text-red">Add New Product</h2>
            <form id="addProduct" onSubmit={handleFormSubmit} className=" px-3 signUp-form">
                <div className="d-flex w-100">
                    <Form.Floating className="mb-3 w-50 me-3">
                        <Form.Control
                            id="floatingNameCustom"
                            type="text"
                            name="brand"
                            onBlur={handleOnBlur}
                            placeholder="Brand Name"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingInputCustom">Brand Name</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3 w-50">
                        <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            name="modelName"
                            onBlur={handleOnBlur}
                            placeholder="Model Name"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingInputCustom">Model Name</label>
                    </Form.Floating>
                </div>
                <div className="d-flex w-100">
                    <Form.Floating className="mb-3 w-50 me-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="number"
                            name="price"
                            onBlur={handleOnBlur}
                            placeholder="Price"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingPasswordCustom">Price</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3 w-50">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="number"
                            name="year"
                            onBlur={handleOnBlur}
                            placeholder="Year"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingPasswordCustom">Year</label>
                    </Form.Floating>
                </div>
                <div className="d-flex w-100">
                    <Form.Floating className="mb-3 w-50 me-3">
                        <Form.Control
                            id="floatingNameCustom"
                            type="text"
                            name="poweredBy"
                            onBlur={handleOnBlur}
                            placeholder="Powered By"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingInputCustom">Powered By</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3 w-50">
                        <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            name="engineType"
                            onBlur={handleOnBlur}
                            placeholder="Engine Type"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingInputCustom">Engine Type</label>
                    </Form.Floating>
                </div>
                <div className="d-flex w-100">
                    <Form.Floating className="mb-3 w-50 me-3">
                        <Form.Control
                            id="floatingNameCustom"
                            type="text"
                            name="type"
                            onBlur={handleOnBlur}
                            placeholder="Type"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingInputCustom">Type</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3 w-50">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            name="enginePower"
                            onBlur={handleOnBlur}
                            placeholder="Engine Power"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingPasswordCustom">Engine Power</label>
                    </Form.Floating>
                </div>
                <div className="d-flex w-100">
                    <Form.Floating className="mb-3 w-50 me-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            name="displacement"
                            onBlur={handleOnBlur}
                            placeholder="displacement"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingPasswordCustom">Displacement</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3 w-50">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="text"
                            name="bore"
                            onBlur={handleOnBlur}
                            placeholder="Bore / Stroke"
                            className="rounded-0"
                        />
                        <label htmlFor="floatingPasswordCustom">Bore / Stroke</label>
                    </Form.Floating>
                </div>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingPasswordCustom"
                        type="text"
                        name="img"
                        onBlur={handleOnBlur}
                        placeholder="Image URL"
                        className="rounded-0"
                    />
                    <label htmlFor="floatingPasswordCustom">Image URL</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control
                            as="textarea"
                            name="description"
                            onBlur={handleOnBlur}
                            placeholder="Description"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Floating>
                <Button type="submit" className="form-control text-red my-btn mt-3 text-black">SUBMIT</Button>
            </form>
        </div>
    );
};

export default AddProduct;