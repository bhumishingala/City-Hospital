import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { themeContext } from '../../context/ThemeContext';
import { signOutAction } from '../../redux/action/auth.action';
import Alert from '../alert/Alert';

function Header(props) {
    const value = useContext(themeContext);

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    console.log(value);

    return (
        <div className="main-header">
            <div id="topbar" className={`d-flex align-items-center fixed-top ${value.theme}`}>
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                    <button onClick={() => value.toggle_theme(value.theme)}>
                        Change Theme
                    </button>
                    <Alert />
                </div>
            </div>
            <header id="header" className={`fixed-top ${value.theme}`}>
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <a href="index.html">
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li>
                                <NavLink className="nav-link scrollto active" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to="/department">Departments</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to="/doctors">Doctors</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to="/aboutus">About Us</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to="/contact">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className="nav-link scrollto" to="/medicines">medicines</NavLink>
                            </li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <NavLink className="appointment-btn scrollto" to="/Book_apt"><span className="d-none d-md-inline"></span>Make an Appointment</NavLink>
                    {
                        auth.user === null ?
                            <NavLink to="/Login" className="appointment-btn scrollto">
                                <span className="d-none d-md-inline">Login/ Signup</span>
                            </NavLink>
                            :
                            <NavLink to="/" className="appointment-btn scrollto">
                                <span className="d-none d-md-inline" onClick={() => { dispatch(signOutAction()) }}>Logout</span>
                            </NavLink>
                    }
                </div>
            </header>
        </div>

    );
}

export default Header;