import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const ManageAllOrder = () => {

    const [products, setProducts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://hidden-thicket-41796.herokuapp.com/purchases/all')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products, user.email]);



    const handleCancel = (id) => {
        swal({
            title: "Are you sure?",
            text: "You want to Delete it?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://hidden-thicket-41796.herokuapp.com/purchases/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                        });
                    swal("Delete Successfully", {
                        icon: "success",
                    });

                }
            });

    }

    const handleOnChange = (e,id) => {
        const status = e.target.value;
        let modifiredOrders = []
        products.forEach(item => {
            if (item._id === id) {
                item.status = e.target.value
            }
            modifiredOrders.push(item)
        });
        setProducts(modifiredOrders)
        const modifiredStatus = { id, status }
        const url = "https://hidden-thicket-41796.herokuapp.com/purchases"

        axios.patch(url, modifiredStatus).then(data => {
            swal("Great", `Product is ${status}`, "success");
        })
    }
    
    return (
        < div className="h-100">
            <h1 className="fw-bold text-center my-4 text-red">Manage All Orders</h1>
            <Table responsive striped bordered hover size="sm" className="h-100 text-center">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Bike Model Name</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>
                                <td>{product.name}</td>
                                <td>{product.email}</td>
                                <td>{product?.bike?.modelName}</td>
                                <td>
                                    <select className={product.status==="Pending" ? "status pending":product.status==="On Going"?"status on-going": "status done"} defaultValue={product.status} onChange={e=>handleOnChange(e,product._id)}>
                                        <option value="Pending" style={{color: 'red'}}>Pending</option>
                                        <option value="On Going" style={{ color: 'orange' }}>On Going</option>
                                        <option value='Done' style={{ color: 'green' }}>Done</option>
                                    </select>
                                </td>
                                <td className="delete-btn" onClick={() => handleCancel(product._id)}>Delete</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrder;