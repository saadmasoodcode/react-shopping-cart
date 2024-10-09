import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';
import { AppContext } from '../../context/AppContext';

function ProductDetail() {
	const { addToCart } = useContext(AppContext);

	let [productData, setProductData] = useState({});

	const params = useParams();
	console.log(params.id);

	useEffect(() => {
		axios
			.get(`https://fakestoreapi.com/products/${params.id}`)
			.then((response) => {
				if (response) {
					setProductData(response.data);
				}
				console.log(response.data);
			});
	}, [params.id]); // Dependency array should include params.id to fetch data for the correct product

	return (
		<div id={productData.id} className="product-details-container">
			<img src={productData.image} alt="img" />
			<div>
				<h2>{productData.title}</h2>
				<br />

				<h4>Price: ${productData.price}</h4>
				<h4>Category: {productData.category}</h4>
				{/* <h4>Rating: {productData.rating.rate}</h4> */}
				<br />
				<h4>{productData.description}</h4>
				<br />

				<button onClick={() => addToCart(productData)}>❤</button>
			</div>
		</div>
	);
}

export default ProductDetail;
