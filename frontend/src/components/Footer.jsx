import React from 'react';
import {Container, Col} from 'react-bootstrap'

const Footer = (props) => {
    return (
        <footer>
            <Container>
                <Col className='text-center py-3'>
                    Copyright &copy; ProShop
                </Col>
            </Container>
        </footer>
    );
};

export default Footer;
