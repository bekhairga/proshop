import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import {
	Row,
	Col,
	Image,
	Form,
	Button,
	ListGroup,
	Card,
} from 'react-bootstrap';
import { addToCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
	const productId = match.params.id;
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, [dispatch, productId, qty]);
	return <div>Cart</div>;
};

export default CartScreen;
