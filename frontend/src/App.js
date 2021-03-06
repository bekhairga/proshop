import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
const App = () => {
	return (
		<Router>
			<Header />
			<main className='py-3'>
				<Container>
					<Route path='/' component={HomeScreen} exact />
					<Route path='/login' component={LoginScreen} exact />
					<Route path='/register' component={RegisterScreen} exact />
					<Route path='/shipping' component={ShippingScreen} exact />
					<Route path='/product/:id' component={ProductScreen} />
					<Route path='/profile' component={ProfileScreen} />
					<Route path='/payment' component={PaymentScreen} />
					<Route path='/placeorder' component={PlaceOrderScreen} />
					<Route path='/cart/:id?' component={CartScreen} />
					<Route path='/order/:id' component={OrderScreen} />
					<Route path='/admin/userlist' component={UserListScreen} />
				</Container>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
