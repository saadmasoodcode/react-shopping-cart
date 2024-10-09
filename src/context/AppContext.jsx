import { createContext, useEffect, useRef, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = (props) => {
	const [cart, setCart] = useState([]);

	const isMounted = useRef(false);

	function addToCart(product) {
		let _cart = [];
		if (cart) {
			_cart = [...cart];
		}

		if (_cart.find((el) => el.id == product.id)) {
			console.log('Item already in cart');
		} else {
			_cart.push({ ...product, quantity: 1 });
			setCart(_cart);
		}
	}

	useEffect(() => {
		setCart(JSON.parse(localStorage.getItem('cart')));
	}, []);

	useEffect(() => {
		if (isMounted.current === true) {
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			isMounted.current = true;
		}
	}, [cart]);

	return (
		<AppContext.Provider
			value={{
				cart,
				setCart,
				addToCart,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
