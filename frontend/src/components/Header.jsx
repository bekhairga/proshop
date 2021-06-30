import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
const Header = (props) => {
	const dispatch = useDispatch();
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const logoutHandler = () => {
		dispatch(logout());
	};
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand href='/'>ProShop</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<LinkContainer to='/cart'>
								<Nav.Link>
									<i className='fas fa-shopping-cart' /> Card
								</Nav.Link>
							</LinkContainer>
							{userInfo ? (
								<NavDropdown title={userInfo.name} id='username'>
									<LinkContainer to='/profile'>
										<NavDropdown.Item>Profile</NavDropdown.Item>
									</LinkContainer>
									<NavDropdown.Item onClick={logoutHandler}>
										LogOut
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<LinkContainer to='/login'>
									<Nav.Link>
										<i className='fas fa-user' /> Sign in
									</Nav.Link>
								</LinkContainer>
							)}
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};

export default Header;
