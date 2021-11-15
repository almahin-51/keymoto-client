import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../hooks/useAuth';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import MyProfile from './MyProfile/MyProfile';
import MyOrder from './MyOrder/MyOrder';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Payment from './Payment/Payment';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import AddProduct from './AddProduct/AddProduct';
import Review from './Review/Review';

const Dashboard = () => {
    const { user, logOut, admin } = useAuth();
    const [toggle, setToggle] = useState(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    let { path, url } = useRouteMatch();



    const logInOut = () => {
        swal({
            title: "Are you sure?",
            text: "You want to log Out!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Successfully Log Out", {
                        icon: "success",
                    });
                    logOut();
                    setToggle(!toggle);
                }
            });
    }


    return (
        <div className="dashboard container">
            <div className="m-2 p-2">
                <div className="dashboard-header">
                    <Button className="dashboard-slider-btn" onClick={handleShow}>
                        <i className="fas fa-bars"></i>
                    </Button>

                    <div className="lg-menu-profile" onClick={() => setToggle(!toggle)}>
                        {user.photoURL ? <img className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                            : <div className="menu-name">{user?.email?.slice(0, 1)}</div>}
                    </div>
                    <div className={toggle ? "drop_down_dash" : "drop_down_dash active"}>
                        <div className="w-100">
                            {user.email && <h6 style={{ color: 'red' }} className="mt-2">Welcome</h6>}
                            {user.email && <h6 className="mt-2">{user.displayName}</h6>}
                            {user.email && <p style={{ fontSize: '14px' }} className="mb-3">{user.email}</p>}
                            {
                                !user.email ? <div>
                                    <Link to="/login"><button className="m-2 my-btn text-black">LOGIN</button></Link>
                                    <Link to="/signup"><button className="m-1 my-btn text-black">SIGNUP</button></Link>
                                </div> : <div>
                                    <button className="my-btn text-black" onClick={() => logInOut()}>Log Out</button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path={path}>
                        <MyProfile></MyProfile>
                    </Route>
                    <Route exact path={`${path}/my_profile`}>
                        <MyProfile></MyProfile>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    {admin && <Route path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>}
                    {admin && <Route path={`${path}/add_product`}>
                        <AddProduct></AddProduct>
                    </Route>}
                    {admin && <Route path={`${path}/manage_all_orders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>}
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    {!admin && <Route path={`${path}/:my_orders`}>
                        <MyOrder></MyOrder>
                    </Route>}
                </Switch>
            </div>

            <Offcanvas className="dashboard-details" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="fw-bold fs-2">KEYMOTO</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="dashboard-slide p-0">
                        <li><NavLink activeStyle={{
                            backgroundColor: 'red',
                            color: "white",
                            borderRadius: '5px',
                            display: 'flex'
                        }} to={`${url}/my_profile`} className="d-flex"><div className="slide-icon"><i className="fas fa-user"></i></div> My Profile</NavLink></li>

                        {
                            admin && <li><NavLink activeStyle={{
                                backgroundColor: 'red',
                                color: "white",
                                borderRadius: '5px',
                                display: 'flex'
                            }} to={`${url}/manage_all_orders`} className="d-flex"><div className="slide-icon"><i className="fas fa-user"></i></div>Manage All orders</NavLink></li>
                        }
                        {
                            admin && <li><NavLink activeStyle={{
                                backgroundColor: 'red',
                                color: "white",
                                borderRadius: '5px',
                                display: 'flex'
                            }} to={`${url}/make-admin`} className="d-flex"><div className="slide-icon"><i className="fas fa-user"></i></div> Make Admin</NavLink></li>
                        }
                        {
                            admin && <li><NavLink activeStyle={{
                                backgroundColor: 'red',
                                color: "white",
                                borderRadius: '5px',
                                display: 'flex'
                            }} to={`${url}/add_product`} className="d-flex"><div className="slide-icon"><i className="fas fa-user"></i></div>Add Product</NavLink></li>
                        }

                        {
                            !admin&&<li><NavLink activeStyle={{
                            backgroundColor: 'red',
                            color: "white",
                                borderRadius: '5px',
                                display: 'flex'
                        }} to={`${url}/my_orders`} className="d-flex"><div className="slide-icon"><i className="fas fa-indent"></i></div> My Orders</NavLink></li>
                        }
                        <li><NavLink activeStyle={{
                            backgroundColor: 'red',
                            color: "white",
                            borderRadius: '5px',
                            display: 'flex'
                        }} to={`${url}/payment`} className="d-flex"><div className="slide-icon"><i className="fas fa-shopping-cart"></i></div> Payment</NavLink></li>

                        <li><NavLink activeStyle={{
                            backgroundColor: 'red',
                            color: "white",
                            borderRadius: '5px',
                            display: 'flex'
                        }} to={`${url}/review`} className="d-flex"><div className="slide-icon"><i className="fas fa-file-alt"></i></div> Review</NavLink></li>

                        <li><Button onClick={logInOut} className="d-flex m-0 w-100
                        "><div className="slide-icon"><i className="fas fa-sign-out-alt"></i></div> log Out</Button></li>
                    </ul>
                    <div className="back-home">
                        <Link to="/home"><Button className="my-btn text-black">GO TO HOME</Button></Link>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Dashboard;