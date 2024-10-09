import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const navigate = useNavigate();

	function goToCart(e) {
		navigate('/cart');
	}

	return (
		<>
			<div className="navbar-container">
				<h2>Shopping Mart</h2>
				<h2 className="cart-btn" onClick={goToCart}>
					🛒
				</h2>
			</div>
			<Outlet />
		</>
	);
}

export default Navbar;
