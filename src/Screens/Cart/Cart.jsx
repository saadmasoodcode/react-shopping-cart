import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
	const { cart, setCart } = useContext(AppContext);
	const navigate = useNavigate();

	function quantityChange(e, index) {
		const newQuantity = parseInt(e.target.value);
		if (newQuantity >= 0) {
			const updatedCart = cart.map((item, idx) =>
				idx === index ? { ...item, quantity: newQuantity } : item
			);
			setCart(updatedCart);
		}
	}

	function orderConfirm(e) {
		setCart([]);
		setTimeout(() => {
			navigate('/order-complete');
		}, 1000);
	}

	const total = cart.reduce(
		(acc, item) => acc + item.quantity * item.price,
		0
	);

	return (
		<div className="cart-container">
			<table>
				<thead>
					<tr>
						<th>Image</th>
						<th>Product</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Subtotal</th>
					</tr>
				</thead>
				<tbody>
					{cart.map((item, index) => (
						<tr key={index}>
							<td>
								<img src={item.image} alt="" />
							</td>
							<td>{item.title}</td>
							<td>${item.price.toFixed(2)}</td>
							<td className="quantity">
								<input
									value={item.quantity}
									type="number"
									onChange={(e) => quantityChange(e, index)}
								/>
							</td>
							<td>${(item.quantity * item.price).toFixed(2)}</td>
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<h2>Total: ${total.toFixed(2)}</h2>
				<br />
				<br />
				<button onClick={orderConfirm}>Confirm Order</button>
			</div>
		</div>
	);
}

export default Cart;
