import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.png';

const NavBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <NavDropdown title="Home" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={HashLink} to="/home#home">Home</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#doctors">Doctors</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutUs">AboutUs</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact">Contact</Nav.Link>
                        {/* {user?.email ?
                            <>
                                <p className="user_display_name">{user.displayName || user.email} -</p>
                                <Nav.Link onClick={logOut} as={HashLink} to="/logIn" className="login">LogOut</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link as={HashLink} to="/logIn" className="login">LogIn</Nav.Link>
                                <Nav.Link as={HashLink} to="/register" className="register">Register</Nav.Link>
                            </>
                        } */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavBar;