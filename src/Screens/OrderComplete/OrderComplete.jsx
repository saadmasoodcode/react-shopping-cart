import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderComplete() {
	const navigate = useNavigate();

	return (
		<div>
			<h1>Your Order is Shipped</h1>
			<h1>Thank you for shopping</h1>
			<button onClick={() => navigate('/')}>Continue Shopping</button>
		</div>
	);
}

export default OrderComplete;
