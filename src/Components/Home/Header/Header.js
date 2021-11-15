import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import logo from '../../../image/logo.svg';
import BlackLogo from '../../../image/logo-dark.svg';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = ({ black }) => {
    const { user, logOut } = useAuth();
    const [toggle, setToggle] = useState(true);

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
        <div style={{ position: 'relative' }}>
            <div className="text-white py-4 container align-items-center d-flex justify-content-between" style={{ zIndex: '10', position: 'absolute', left: '0%', right: '0%' }}>

                <div className="header-link">
                    <Nav className={!black ? "me-auto header-link" : "me-auto header-link black-2"}>
                        <Nav.Link as={NavLink}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/home">HOME</Nav.Link>
                        <Nav.Link as={NavLink}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} to="/bikes">Bikes</Nav.Link>
                    </Nav>
                </div>

                <div className={black ? "black header-logo":"header-logo"} >
                    <Link to="/home"><img href="/home" className="img-fluid" src={!black ? logo : BlackLogo} alt="" /></Link>
                    KEYMOTO
                </div>

                <div className="d-flex align-items-center">
                    <div className="drop-down-box text-black" onClick={() => setToggle(!toggle)}>
                        {
                            !user.photoURL ? <img className="img-fluid" src='https://i.ibb.co/WGhg6hq/download.png' alt="" /> : <img className="img-fluid" src={user?.photoURL} alt="" />
                        }
                        <div className={toggle ? "drop_down" : "drop_down active"}>
                            {user.email && <h6 className="mt-2">Welcome</h6>}
                            {user.email && <h6 className="mt-2">{user.displayName}</h6>}
                            <div className="me-auto small">
                                <Nav.Link className="p-0" as={NavLink}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }} to="/home">HOME</Nav.Link>
                                {user.email && <Nav.Link className="pb-3 pt-1" as={NavLink}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "red"
                                    }} to="/dashboard">Dashboard</Nav.Link>}
                            </div>

                            {
                                !user.email ? <div>
                                    <Link to="/login"><button className="m-2 my-btn text-black">LOGIN</button></Link>
                                    <Link to="/signup"><button className="m-1 my-btn text-black">SIGNUP</button></Link>
                                </div> : <div>
                                    <button className="my-btn text-black" onClick={logInOut}>Log Out</button>
                                </div>
                            }
                        </div>
                    </div>

                    <div className="lg-box">
                        <div>
                            <div className="d-flex align-items-center">
                                {user.email && <button className="mx-3 my-btn"><NavLink activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }} className={!black ? "dashboard" : "dashboard black"} to="/dashboard">Dashboard</NavLink></button>}
                                {
                                    user.email ? <div>
                                        <div className="lg-menu-profile" onClick={() => setToggle(!toggle)}>
                                            {user.photoURL ? <img className="img-fluid rounded-circle" src={user?.photoURL} alt="" />
                                                : <div className="menu-name">{user?.email?.slice(0, 1)}</div>}
                                        </div>
                                    </div> : <div>
                                            <Link to="/login"><button className={!black ? "ms-3 my-btn" : "ms-3 my-btn black"}>LOGIN</button></Link>
                                            <Link to="/signup"><button className={!black ? "ms-3 my-btn" : "ms-3 my-btn black"}>SIGNUP</button></Link>
                                    </div>
                                }
                            </div>

                            <div className={toggle ? "drop_down" : "drop_down active"}>
                                <div className="w-100">
                                    {user.email && <h6 style={{ color: 'red' }} className="mt-2">Welcome</h6>}
                                    {user.email && <h6 style={{ color: 'blue' }} className="mt-2">{user.displayName}</h6>}
                                    {user.email && <p style={{ color: 'blue', fontSize: '14px' }} className="mb-3">{user.email}</p>}
                                    {
                                        !user.email ? <div>
                                            <Link to="/login"><button className="m-2 my-btn text-black">LOGIN</button></Link>
                                            <Link to="/signup"><button className="m-1 my-btn text-black">SIGNUP</button></Link>
                                        </div> : <div>
                                            <button className="my-btn text-black" onClick={logInOut}>Log Out</button>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;