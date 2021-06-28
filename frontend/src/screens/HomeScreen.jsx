import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = (props) => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios('/api/products');
			setProducts(data);
		};
		try {
			fetchProducts();
		} catch (err) {
			console.error(err.message);
		}
	}, [products]);
	return (
		<>
			<h1>Latest products</h1>
			<Row>
				{products.map((product) => {
					return (
						<Col key={product._id} sm={12} md={6} lg={4} xl={3}>
							<Product product={product} />
						</Col>
					);
				})}
			</Row>
		</>
	);
};

export default HomeScreen;
