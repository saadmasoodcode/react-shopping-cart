import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Screens/Home/Home';
import Products from './Screens/Products/Products';
import ProductDetail from './Screens/ProductDetail/ProductDetail';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Screens/Cart/Cart';
import AppContextProvider from './context/AppContext';
import OrderComplete from './Screens/OrderComplete/OrderComplete';

function App() {
	return (
		<div>
			<AppContextProvider>
				<Routes>
					<Route element={<Navbar />}>
						<Route path="/" element={<Home />} />
						<Route
							path="/products/category/:category"
							element={<Products />}
						/>
						<Route path="/products/:id" element={<ProductDetail />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/order-complete" element={<OrderComplete />} />
					</Route>
				</Routes>
			</AppContextProvider>
		</div>
	);
}

export default App;
