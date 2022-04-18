import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../image/teeth-logo.png'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>

                <Navbar.Brand as={Link} to="/">
                    <img src={logo} width='90px' alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="home#services">services</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        {/* <Nav.Link href="#Checkout">Check Out</Nav.Link> */}
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {user ?
                            <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>SignOut</button>
                            :
                            <Nav.Link as={Link} to="/login">
                                Login
                            </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;