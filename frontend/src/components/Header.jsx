import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Header = (props) => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">ProShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/card"><i className="fas fa-shopping-cart"/> Card</Nav.Link>
                            <Nav.Link href="/signin"> <i className="fas fa-user"/> Sign in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;