import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png';
import useAuth from '../hooks/useAuth';
import './NavBar.css'

const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end nav_btn">


                        <NavDropdown title="Home" id="collasible-nav-dropdown" className="btn_nav_dropdown">
                            <NavDropdown.Item as={HashLink} to="/home#home">Home</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#aboutUs">AboutUs</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#services">Hotels</NavDropdown.Item>
                            <NavDropdown.Item as={HashLink} to="/home#works">Works</NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/manageOrders">ManageOrders</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutUs">AboutUs</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        {user?.email ?
                            <>
                                <p className="user_display_name">{user.displayName || user.email} -</p>
                                <Nav.Link onClick={logOut} as={HashLink} to="/logIn" className="login">LogOut</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={HashLink} to="/logIn" className="login">LogIn</Nav.Link>
                                <Nav.Link as={HashLink} to="/register" className="register">Register</Nav.Link>
                            </>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;